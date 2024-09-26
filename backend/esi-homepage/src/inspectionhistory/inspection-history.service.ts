import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InspectionHistory } from './inspection-history.entity';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InspectionHistoryDto } from './inspection-history.dto';
import { ImageFile } from 'src/imagefile/image-file.entity';
import { ImageFileService } from 'src/imagefile/image-file.service';
import { ImageFileCategory } from 'src/imagefile/image-file-category.enum';

@Injectable()
export class InspectionHistoryService {
  constructor(
    @InjectRepository(InspectionHistory)
    private inspectionHistoryRepository: Repository<InspectionHistory>,
    private imageFileService: ImageFileService,
  ) {}

  getHistories(): Promise<InspectionHistory[]> {
    return this.inspectionHistoryRepository.find();
  }

  async getHistoriesPagenation(page: number = 1): Promise<any> {
    const take = 12;
    const skip = (page - 1) * take;

    const histories = await this.inspectionHistoryRepository
      .createQueryBuilder('h')
      .leftJoin(ImageFile, 'f', 'h.service_history_id = f.parent_id')
      .where('f.category= :category', { category: 'HISTORY' })
      .select([
        'h.service_history_id',
        'h.service_name',
        'h.client_name',
        'h.client_building_address',
        'h.client_building_area',
        'f.file_name',
        'f.file_path',
      ])
      .offset(skip)
      .limit(take)
      .getRawMany();

    const total = await this.inspectionHistoryRepository.count();

    return {
      data: histories,
      meta: {
        total,
        last_page: Math.ceil(total / take),
      },
    };
  }

  async getHistory(id: number): Promise<any> {
    const history: InspectionHistory = await this.findOrThrowNotFound(id);

    const image = await this.getImageFile(id);

    return {
      history: history,
      image: {
        fileId: image.id,
        fileName: image.fileName,
        filePath: image.filePath,
      },
    };
  }

  async createHistory(
    request: InspectionHistoryDto,
    file: Express.Multer.File,
  ): Promise<InspectionHistory> {
    const history = this.createInspectionHistoryFromRequest(request);

    try {
      const savedHistory = await this.inspectionHistoryRepository.save(history);
      if (file) {
        this.uploadImageFile(savedHistory.id, file);
      }
      return savedHistory;
    } catch (error) {
      throw new InternalServerErrorException(
        `점검 서비스 이력 등록에 실패했습니다. Message: ${error.message}`,
      );
    }
  }

  async updateHistory(
    id: number,
    request: InspectionHistoryDto,
    file: Express.Multer.File,
  ): Promise<InspectionHistory> {
    try {
      const history: InspectionHistory = await this.findOrThrowNotFound(id);
      this.updateInspectionHistoryFromRequest(history, request);
      const savedHistory = await this.inspectionHistoryRepository.save(history);

      if (file) {
        this.deleteImageFile(id);
        this.uploadImageFile(id, file);
      }

      return savedHistory;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async deleteHistory(id: number): Promise<void> {
    try {
      const deleteHitory = await this.inspectionHistoryRepository.delete(id);

      this.deleteImageFile(id);

      if (deleteHitory.affected === 0) {
        throw new NotFoundException(
          `삭제할 점검 서비스 이력이 없습니다. ID: ${id}`,
        );
      }
    } catch (error) {}
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  private createInspectionHistoryFromRequest(
    request: InspectionHistoryDto,
  ): InspectionHistory {
    const {
      serviceName,
      serviceDate,
      clientName,
      clientBuildingAddress,
      clientBuildingPurpose,
      clientBuildingArea,
      maintenance,
      performance,
      consignment,
    } = request;

    return this.inspectionHistoryRepository.create({
      serviceName,
      serviceDate,
      clientName,
      clientBuildingAddress,
      clientBuildingPurpose,
      clientBuildingArea,
      maintenance: maintenance.toString() === 'true',
      performance: performance.toString() === 'true',
      consignment: consignment.toString() === 'true',
    });
  }

  private updateInspectionHistoryFromRequest(
    history: InspectionHistory,
    request: InspectionHistoryDto,
  ): void {
    const {
      serviceName,
      serviceDate,
      clientName,
      clientBuildingAddress,
      clientBuildingPurpose,
      clientBuildingArea,
      maintenance,
      performance,
      consignment,
    } = request;

    history.serviceName = serviceName;
    history.serviceDate = serviceDate;
    history.clientName = clientName;
    history.clientBuildingAddress = clientBuildingAddress;
    history.clientBuildingPurpose = clientBuildingPurpose;
    history.clientBuildingArea = clientBuildingArea;
    history.maintenance = maintenance.toString() === 'true';
    history.performance = performance.toString() === 'true';
    history.consignment = consignment.toString() === 'true';
  }

  private async findOrThrowNotFound(id: number): Promise<InspectionHistory> {
    let inspectionHistory: InspectionHistory =
      await this.inspectionHistoryRepository.findOneBy({
        id,
      });
    if (!inspectionHistory) {
      throw new NotFoundException(`점검 서비스 이력이 없습니다. ID: ${id}`);
    }

    return inspectionHistory;
  }

  private async getImageFile(id: number): Promise<ImageFile> {
    let imageFile = await this.imageFileService.getImage(
      id,
      ImageFileCategory.HISTORY,
    );
    return imageFile;
  }

  private deleteImageFile(id: number) {
    this.imageFileService.deleteImageFile(id, ImageFileCategory.HISTORY);
  }

  private uploadImageFile(id: number, file: Express.Multer.File) {
    this.imageFileService.uploadImageFile(id, file, ImageFileCategory.HISTORY);
  }
}

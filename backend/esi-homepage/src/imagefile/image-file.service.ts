import { Repository } from 'typeorm';
import { ImageFile } from './image-file.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ImageFileCategory } from './image-file-category.enum';
import * as fs from 'fs';

@Injectable()
export class ImageFileService {
  constructor(
    @InjectRepository(ImageFile)
    private imageFileServiceRepository: Repository<ImageFile>,
  ) {}

  async uploadImageFile(
    parentId: number,
    file: Express.Multer.File,
    category: ImageFileCategory,
  ): Promise<ImageFile> {
    try {
      const imageFile: ImageFile = this.imageFileServiceRepository.create({
        parentId: parentId,
        category: category,
        fileName: file.filename,
        fileExtention: file.originalname.split('.')[1],
        fileSize: file.size,
        filePath: file.path,
      });

      const savedImage = await this.imageFileServiceRepository.save(imageFile);

      if (!savedImage) {
        throw new BadRequestException();
      }

      return savedImage;
    } catch (error) {
      throw new InternalServerErrorException(
        `이미지 등록에 실패했습니다. ${error.message}`,
      );
    }
  }

  async getImage(
    parentId: number,
    category: ImageFileCategory,
  ): Promise<ImageFile> {
    const image = await this.imageFileServiceRepository.findOne({
      where: { parentId: parentId, category: category },
    });
    return image;
  }

  async deleteImageFile(
    parentId: number,
    category: ImageFileCategory,
  ): Promise<void> {
    const imageFileToDelete = await this.imageFileServiceRepository.findOneBy({
      parentId,
      category,
    });

    if (!imageFileToDelete) {
      console.log('not found imagefile.');
      throw new NotFoundException();
    }

    const fileName = imageFileToDelete.fileName;

    if (fs.existsSync('./uploads/' + fileName)) {
      try {
        fs.unlinkSync('./uploads/' + fileName);
        console.log('image delete');
      } catch (error) {
        console.log(error.message);
      }
    }

    try {
      await this.imageFileServiceRepository.remove(imageFileToDelete);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}

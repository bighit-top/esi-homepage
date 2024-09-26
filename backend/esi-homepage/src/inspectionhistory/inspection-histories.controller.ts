import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import {
  ApiOkResponse,
  ApiNoContentResponse,
  ApiCreatedResponse,
  ApiUnauthorizedResponse,
  ApiConsumes,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';

import { InspectionHistoryService } from './inspection-history.service';
import { InspectionHistory } from './inspection-history.entity';
import { InspectionHistoryDto } from './inspection-history.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterConfigService } from 'src/imagefile/config/multer.config';
import { AuthGuard } from '@nestjs/passport';
import { SkipAuthGuard } from 'src/auth/skip-auth.guard';
import { AuthMetaData } from 'src/auth/auth-metadata.decorator';

@Controller('inspectionhistories')
// @UseGuards(AuthGuard())
export class InspectionHistoryController {
  constructor(
    private inspectionServiceHistoryService: InspectionHistoryService,
  ) {}

  @Get('/')
  @AuthMetaData('skipAuthCheck')
  // @UseGuards(SkipAuthGuard)
  @ApiOkResponse()
  async getHistories(
    @Query('page')
    page: number,
  ): Promise<InspectionHistory[]> {
    return await this.inspectionServiceHistoryService.getHistoriesPagenation(
      page,
    );
  }

  @Post('/')
  @UseInterceptors(
    FileInterceptor('image', new MulterConfigService().createMulterOptions()),
  )
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiCreatedResponse()
  @ApiUnauthorizedResponse()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: InspectionHistoryDto,
  })
  async createHistory(
    @UploadedFile() file: Express.Multer.File,
    @Body() request: InspectionHistoryDto,
  ): Promise<InspectionHistory> {
    const history = await this.inspectionServiceHistoryService.createHistory(
      request,
      file,
    );
    return history;
  }

  @Get('/:id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse()
  async getHistory(@Param('id') id: number): Promise<InspectionHistory> {
    const history = await this.inspectionServiceHistoryService.getHistory(id);
    return history;
  }

  @Put('/:id')
  @UseInterceptors(
    FileInterceptor('image', new MulterConfigService().createMulterOptions()),
  )
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: InspectionHistoryDto,
  })
  async updateHistory(
    @Param('id') id: number,
    @Body() request: InspectionHistoryDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<InspectionHistory> {
    const history = await this.inspectionServiceHistoryService.updateHistory(
      id,
      request,
      file,
    );
    return history;
  }

  @Delete('/:id')
  @HttpCode(204)
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiNoContentResponse()
  @ApiUnauthorizedResponse()
  async deleteHistory(@Param('id') id: number): Promise<void> {
    await this.inspectionServiceHistoryService.deleteHistory(id);
  }
}

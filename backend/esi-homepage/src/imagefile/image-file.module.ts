import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { MulterConfigService } from './config/multer.config';
import { ImageFileService } from './image-file.service';
import { ImageFile } from './image-file.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([ImageFile]),
    MulterModule.registerAsync({
      useClass: MulterConfigService,
    }),
  ],
  providers: [ImageFileService],
})
export class ImageFileModule {}

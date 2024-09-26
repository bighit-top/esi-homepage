import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InspectionHistory } from './inspection-history.entity';
import { InspectionHistoryService } from './inspection-history.service';
import { InspectionHistoryController } from './inspection-histories.controller';
import { ImageFile } from 'src/imagefile/image-file.entity';
import { ImageFileService } from 'src/imagefile/image-file.service';
import { AuthModule } from 'src/auth/auth.module';
import { SkipAuthGuard } from 'src/auth/skip-auth.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([InspectionHistory, ImageFile]),
    AuthModule,
  ],
  providers: [InspectionHistoryService, ImageFileService, SkipAuthGuard],
  controllers: [InspectionHistoryController],
})
export class InspectionHistoriesModule {}

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { InspectionInquiriesModule } from './inspectionrinquiry/inspection-Inquiries.module';
import { InspectionHistoriesModule } from './inspectionhistory/inspection-histories.module';
import { Office } from './office/office.entity';
import { ImageFileModule } from './imagefile/image-file.module';
import { CommentsModule } from './comment/comments.module';
import { OfficeModule } from './office/office.module';
import { AuthModule } from './auth/auth.module';
import { SkipAuthGuard } from './auth/skip-auth.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...typeORMConfig, logging: true }),
    TypeOrmModule.forFeature([Office]),
    ImageFileModule,
    AuthModule,
    CommentsModule,
    InspectionInquiriesModule,
    InspectionHistoriesModule,
    OfficeModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads', // 정적 파일을 제공할 URL 경로
      serveStaticOptions: {
        extensions: ['png', 'jpg', 'jpeg'], // png 확장자를 가진 파일에 대해 MIME 타입 설정
        setHeaders: (res) => {
          res.setHeader('Content-Type', 'image/png'); // MIME 타입 설정
        },
      },
    }),
  ],
})
export class AppModule {}

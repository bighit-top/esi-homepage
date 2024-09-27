import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { InspectionHistoriesModule } from './inspectionhistory/inspection-histories.module';
import { Office } from './office/office.entity';
import { ImageFileModule } from './imagefile/image-file.module';
import { OfficeModule } from './office/office.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...typeORMConfig, logging: true }),
    TypeOrmModule.forFeature([Office]),
    ImageFileModule,
    AuthModule,
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

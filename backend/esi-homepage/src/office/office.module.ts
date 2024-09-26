import { Module } from '@nestjs/common';
import { OfficeService } from './office.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Office } from './office.entity';
import { OfficeController } from './office.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Office])],
  providers: [OfficeService],
  controllers: [OfficeController],
})
export class OfficeModule {}

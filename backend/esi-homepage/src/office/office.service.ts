import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Office } from './office.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OfficeService {
  constructor(
    @InjectRepository(Office)
    private officeRepository: Repository<Office>,
  ) {}

  getOffices(): Promise<Office[]> {
    return this.officeRepository.find();
  }
}

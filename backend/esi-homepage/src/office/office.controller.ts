import { Controller, Get } from '@nestjs/common';
import { OfficeService } from './office.service';
import { Office } from './office.entity';

import { ApiOkResponse } from '@nestjs/swagger';

@Controller('office')
export class OfficeController {
  constructor(private officeService: OfficeService) {}

  @Get('/')
  @ApiOkResponse()
  getOffices(): Promise<Office[]> {
    return this.officeService.getOffices();
  }
}

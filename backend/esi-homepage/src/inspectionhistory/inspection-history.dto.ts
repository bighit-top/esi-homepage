import {
  IsBoolean,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class InspectionHistoryDto {
  @IsString()
  @MaxLength(255)
  @MinLength(2)
  @ApiProperty()
  serviceName: string;

  @IsString()
  @MaxLength(255)
  @MinLength(6)
  @ApiProperty()
  serviceDate: string;

  @IsString()
  @MaxLength(50)
  @MinLength(2)
  @ApiProperty()
  clientName: string;

  @IsString()
  @MaxLength(255)
  @MinLength(2)
  @ApiProperty()
  clientBuildingAddress: string;

  @IsString()
  @MaxLength(10)
  @MinLength(2)
  @ApiProperty()
  clientBuildingPurpose: string;

  @IsNumber()
  @ApiProperty()
  clientBuildingArea: number;

  @IsBoolean()
  @ApiProperty()
  maintenance: boolean;

  @IsBoolean()
  @ApiProperty()
  performance: boolean;

  @IsBoolean()
  @ApiProperty()
  consignment: boolean;

  @ApiProperty({ type: 'string', format: 'binary' })
  image: string;
}

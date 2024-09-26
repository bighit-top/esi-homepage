import { ImageFile } from 'src/imagefile/image-file.entity';
import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'inspection_history' })
export class InspectionHistory extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'service_history_id' })
  id: number;

  @Column({ name: 'service_name', default: '' })
  serviceName: string;

  @Column({ name: 'service_date' })
  serviceDate: string;

  @Column({ name: 'client_name', length: 50 })
  clientName: string;

  @Column({ name: 'client_building_address', nullable: true })
  clientBuildingAddress: string;

  @Column({ name: 'client_building_purpose', length: 10, nullable: true })
  clientBuildingPurpose: string;

  @Column({ name: 'client_building_area', nullable: true })
  clientBuildingArea: number;

  @Column({ name: 'maintenance', nullable: true })
  maintenance: boolean;

  @Column({ name: 'performance', nullable: true })
  performance: boolean;

  @Column({ name: 'consignment', nullable: true })
  consignment: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // @OneToOne(() => ImageFile, (image) => image.inspectionServiceHistory)
  // @JoinColumn({ name: 'id' })
  // imageFile: ImageFile;

  @ManyToOne(() => User, (user) => user.inspectionHistory)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

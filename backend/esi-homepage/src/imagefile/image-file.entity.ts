import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ImageFileCategory } from './image-file-category.enum';
import { InspectionHistory } from 'src/inspectionhistory/inspection-history.entity';

@Entity()
@Index(['parentId', 'category'], { unique: true })
export class ImageFile extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'file_id' })
  id: number;

  @PrimaryColumn({ name: 'parent_id' })
  parentId: number;

  @PrimaryColumn({ name: 'category', length: 10 })
  category: ImageFileCategory;

  @Column({ name: 'file_name', length: 500 })
  fileName: string;

  @Column({ name: 'file_extention', length: 10 })
  fileExtention: string;

  @Column({ name: 'file_size' })
  fileSize: number;

  @Column({ name: 'file_path', length: 500 })
  filePath: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // @OneToOne(
  //   () => InspectionServiceHistory,
  //   (inspectionServiceHistory) => inspectionServiceHistory.imageFile,
  // )
  // inspectionServiceHistory: InspectionServiceHistory;
}

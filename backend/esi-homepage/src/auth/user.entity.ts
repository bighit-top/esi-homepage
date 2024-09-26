import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRole } from './user-role.enum';
import { Office } from 'src/office/office.entity';
import { InspectionHistory } from 'src/inspectionhistory/inspection-history.entity';
import { Comment } from 'src/comment/comment.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'user_id', type: 'smallint' })
  id: number;

  @Column({ name: 'name', length: 20, nullable: true })
  name: string;

  @Column({ name: 'username', length: 20, unique: true })
  username: string;

  @Column({ name: 'password', length: 200 })
  password: string;

  @Column({ name: 'role', length: 10 })
  role: UserRole;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Office, (office) => office.users)
  @JoinColumn({ name: 'office_id' })
  office: Office;

  @OneToMany(
    () => InspectionHistory,
    (inspectionHistory) => inspectionHistory.user,
  )
  inspectionHistory: InspectionHistory[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comment: Comment[];
}

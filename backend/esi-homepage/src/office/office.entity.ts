import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Office extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'office_id', type: 'tinyint' })
  id: number;

  @Column({ name: 'name', length: 20, unique: true })
  name: string;

  @Column({ name: 'address', unique: true, length: 200 })
  address: string;

  @Column({ name: 'latitude', type: 'double' })
  latitude: number;

  @Column({ name: 'longitude', type: 'double' })
  longitude: number;

  @Column({ name: 'phone_number', length: 20 })
  phoneNumber: string;

  @Column({ name: 'fax_number', length: 20 })
  faxNumber: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => User, (user) => user.office)
  users: User[];
}

import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialDto } from './auth-credential.dto';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserRole } from './user-role.enum';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserRepository extends Repository<User> {
  private ERROR_CODE = '23505';

  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { username, password } = authCredentialDto;

    const isValidEmail = await this.findOneBy({
      username: username,
    });

    if (isValidEmail) {
      throw new ConflictException('이미 존재하는 email 입니다.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userEntity: User = new User();
    userEntity.username = username;
    userEntity.password = hashedPassword;
    userEntity.role = UserRole.ADMIN;

    const user = this.create(userEntity);

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === this.ERROR_CODE) {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}

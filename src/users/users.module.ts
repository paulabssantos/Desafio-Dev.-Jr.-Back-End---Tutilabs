import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database/db.module';
import { CreateUserService } from './services/createUser.service';
import { ListUsersService } from './services/listUser.service';
import { UpdateUserService } from './services/updateUser.service';
import { UsersController } from './users.controller';
import { HashService } from 'src/utils/hash/hash.service';
import { FindUserService } from './services/findUser.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [CreateUserService, ListUsersService, UpdateUserService, FindUserService, HashService],
})
export class UsersModule { }

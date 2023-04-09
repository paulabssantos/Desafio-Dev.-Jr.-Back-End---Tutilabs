import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRepository } from 'src/app/config/database/repositories/users/UserRepository';
import { Hash } from 'src/utils/hash/hash';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository, private readonly hashService: Hash) { }
  async execute({ email, fk_roles, name }: CreateUserDto) {
    if (email) {
      const email_exists = await this.userRepository.findByEmail(email);
      if (email_exists) {
        throw new HttpException(
          'Email já vinculado a um usuário',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    const hash_password = await this.hashService.hash(email.split("@")[0] + '12345')

    return await this.userRepository.create({
      email,
      fk_roles,
      name,
      password: hash_password,
    });
  }
}

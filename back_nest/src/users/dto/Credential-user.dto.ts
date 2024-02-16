import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class CredentialsDto extends PartialType(CreateUserDto) {
  id: string;
  name: string;
  pw: string;
}

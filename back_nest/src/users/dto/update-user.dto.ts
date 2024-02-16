import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: string;
  name: string;
  pw: string;
  newpw: string;
  updated_at: Date;
}

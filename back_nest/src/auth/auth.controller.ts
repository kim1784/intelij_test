import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserEntity } from './entities/auth.entity';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateUserDto } from './dto/update-auth.dto';

@Controller('user')
export class AuthController {
  // private readonly logger = new Logger(AuthController.name);
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHelloWorld(): string {
    return this.authService.getHelloWorld();
  }

  @Post('/signup')
  create(@Body() createUserDto: CreateUserDto) {
    // this.logger.warn(createUserDto);
    console.log(createUserDto);
    console.log('test');
    return this.authService.create(createUserDto);
  }

  @Put('/login')
  login(@Req() request: Request) {
    const user = new UserEntity();
    user.id = request.body.id;
    user.pw = request.body.pw;
    return this.authService.login(user);
  }

  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
  //   return this.authService.update(+id);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}

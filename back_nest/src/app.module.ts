import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig), //typeORMConfig - 데이터 베이스 정보
    BoardsModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}

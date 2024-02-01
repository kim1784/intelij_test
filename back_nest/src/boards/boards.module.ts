import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { boardEntity } from './entities/board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([boardEntity])],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}

import { BoardStatus } from '../boards-status.enum';
import { CreateBoardDTO } from './create-board.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateBoardDTO extends PartialType(CreateBoardDTO) {
  title: string;
  description: string;
  status: BoardStatus;
}

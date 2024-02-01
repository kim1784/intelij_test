// import { IsNotEmpty, isEnum, isNotEmpty } from 'class-validator';
import { BoardStatus } from '../boards-status.enum';

export class CreateBoardDTO {
  title: string;
  description: string;
  status: BoardStatus;
}

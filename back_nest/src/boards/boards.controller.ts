import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDTO } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  getAllBoard() {
    return this.boardsService.findAll();
  }

  @Post()
  @UsePipes(ValidationPipe) // 유효성 검사 pipe
  createBoard(
    // @Body('title') title : string,
    // @Body('description') description : string
    @Body() createBoardDTO: CreateBoardDTO,
  ) {
    // 서비스에서 Board 클래스 변수 하나만 리턴하기 때문에 배열을 주지 않음
    return this.boardsService.createBoard(createBoardDTO);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string) {
    //쿼리스트링에 있는 id값을 가져오기 위함 - localhost:3000?id=''
    return this.boardsService.getBoardById(Number(id));
  }

  // @Get('/:id')
  // getBoardByIdAndTitle(@Param() params : string[]) : Board { // 여러개의 @param을 가져오고 싶을 경우
  //     return this.boardsService.getBoardById(id);
  // }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoardById(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    //@Body('status', BoardStatusValidationPipe) status : BoardStatus   // status에 대한 유효성 검사를 진행하기 때문에 parameter-level에 pipe를 걸음
    @Body() createBoardDTO: CreateBoardDTO,
  ) {
    this.boardsService.updateBoardStatus(Number(id), createBoardDTO);
  }
}

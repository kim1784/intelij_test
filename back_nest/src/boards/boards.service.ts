import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDTO } from './dto/create-board.dto';
import { boardEntity } from './entities/board.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(boardEntity)
    private boardRepository: Repository<boardEntity>,
  ) {}

  async findAll(): Promise<boardEntity[]> {
    return this.boardRepository.find();
  }

  async createBoard(CreateBoardDTO: CreateBoardDTO): Promise<boardEntity> {
    const { title, description, status } = CreateBoardDTO; // 이런식으로 dto 객체를 통해 가져오는 것이 가능

    const board = this.boardRepository.create({
      title,
      description,
      status,
    });

    await this.boardRepository.save(board); //db에 만들어진 객체 저장
    return board;
  }

  async getBoardById(id: number): Promise<boardEntity> {
    const found = await this.boardRepository.findOne({ where: { id } });

    if (!found) {
      // id값이 없으면 에러 표출
      throw new NotFoundException();
    }
    return found;
  }

  async deleteBoardById(id: string): Promise<void> {
    const result = await this.boardRepository.delete(id);
    if (result.affected === 0) {
      //  affected가 0이 나오면 id가 없는 것
      throw new NotFoundException(`can't find Board id ${id}`);
    }
    console.log(result);
  }

  async updateBoardStatus(
    id: number,
    createBoardDTO: CreateBoardDTO,
  ): Promise<void> {
    await this.boardRepository.update(id, createBoardDTO);
  }
}

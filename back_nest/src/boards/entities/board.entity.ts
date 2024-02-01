import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BoardStatus } from "../boards-status.enum";


@Entity({name : 'board'}) // name값으로 테이블을 생성한다는 의미 
export class boardEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment') // id가 키값 /  auto increment
    id : number

    @Column({length : 500})
    title : string;

    @Column()
    description : string;

    @Column()
    status : BoardStatus;
}
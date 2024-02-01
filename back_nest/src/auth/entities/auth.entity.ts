import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tbl_user')
export class UserEntity extends BaseEntity {
  @PrimaryColumn({ name: 'id', nullable: false })
  id: string;

  @Column({ type: 'text', name: 'pw', nullable: false })
  pw: string;

  @Column({ name: 'name', nullable: false })
  name: string;

  // @BeforeInsert() - 데이터 베이스에 insert하기 전에 수행
  // async hashPassword() {
  //   this.password = await argon2.hash(this.password);
  // }
}

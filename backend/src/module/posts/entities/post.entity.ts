import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  BeforeInsert,
} from 'typeorm';
import { generateUid } from 'src/core/generate.uid';

@Entity('posts', { schema: 'public' })
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column('text', { nullable: false, name: 'uid' })
  uid: string;

  @Column('text', {
    nullable: false,
    name: 'post',
  })
  post: string;

  @BeforeInsert()
  BeforeInsert() {
    this.uid = generateUid();
  }
}

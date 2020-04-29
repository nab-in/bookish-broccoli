import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { generateUid } from 'src/core/generate.uid';
import { Comments } from './post-comment.entity';

@Entity('posts', { schema: 'public' })
export class Posts extends BaseEntity {
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

  @Column('text', {
    nullable: false,
    name: 'post',
  })
  title: string;

  @Column('text', {
    nullable: false,
    name: 'post',
  })
  author: string;

  @Column('text', {
    nullable: false,
    name: 'post',
  })
  genre: string;

  @OneToMany(
    type => Comments,
    comments => comments.post,
    {eager: true}
  )
  // @JoinColumn({ name: 'postId' })
  comments: Comments[];

  @BeforeInsert()
  BeforeInsert() {
    this.uid = generateUid();
  }
}

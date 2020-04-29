import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  BeforeInsert,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { generateUid } from 'src/core/generate.uid';
import { Posts } from './post.entity';

@Entity('comments', { schema: 'public' })
export class Comments extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column('text', { nullable: false, name: 'uid' })
  uid: string;

  @Column('text', {
    nullable: false,
    name: 'comment',
  })
  comment: string;

  @ManyToOne(
    type => Posts,
    posts => posts.comments,

  )
  // @JoinColumn({name: 'id'})
  post: Posts[];

  @BeforeInsert()
  BeforeInsert() {
    this.uid = generateUid();
  }
}

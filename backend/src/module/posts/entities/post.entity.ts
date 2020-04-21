import { Column, Entity, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

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
}

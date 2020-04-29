import { EntityRepository, Repository, createQueryBuilder } from 'typeorm';
import { Comments } from '../entities/post-comment.entity';
import { InjectRepository } from '@nestjs/typeorm';

@EntityRepository(Comments)
export class CommentService {
  constructor(
    @InjectRepository(Comments)
    private commentsRepository: Repository<Comments>,
  ) {}
  async getAllComments() {
    const query = this.commentsRepository.createQueryBuilder('comment');
    const comment = await query.getMany();
    return comment;
  }
}

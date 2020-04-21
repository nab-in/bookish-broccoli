import { Post } from '../entities/post.entity';
import { EntityRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@EntityRepository(Post)
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}
  async createPost(createPostDTO: any) {
    const post = new Post();
    Object.keys(createPostDTO).forEach(key => {
      post[key] = createPostDTO[key];
    });
    await this.postRepository.save(post);
    return this.postRepository.findOne({ id: post.id });
  }
}

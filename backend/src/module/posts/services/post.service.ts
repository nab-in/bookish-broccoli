import { Posts } from '../entities/post.entity';
import { EntityRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(Posts)
export class PostService {
  constructor(
    @InjectRepository(Posts)
    private postRepository: Repository<Posts>,
  ) {}
  async createPost(createPostDTO: any) {
    const post = new Posts();
    Object.keys(createPostDTO).forEach(key => {
      post[key] = createPostDTO[key];
    });
    await this.postRepository.save(post);
    return this.postRepository.findOne({ id: post.id });
  }
  async getPosts() {
    const query = this.postRepository.createQueryBuilder('post');
    const posts = await query.getMany();
    return posts;
  }
  async getPostById(id: number): Promise<Posts> {
    const post = await this.postRepository.findOne(id);
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  async editPost(id: number, editPostDTO: any) {
    const { post } = editPostDTO;
    const posts = await this.getPostById(id);
    if (post) {
      posts.post = post;
      await posts.save();
      return posts;
   }
   else {
       throw new NotFoundException(`Post Not Defined`)
   }
  }
}

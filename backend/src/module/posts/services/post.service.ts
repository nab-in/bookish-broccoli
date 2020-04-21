import { Post } from '../entities/post.entity';
import { EntityRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';

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
  async getPosts() {
    const query = this.postRepository.createQueryBuilder('post');
    const posts = await query.getMany();
    return posts;
  }
  async getPostById(id: number): Promise<Post> {
    const post = await this.postRepository.findOne(id);
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

//   async editPost(id: number, editPostDTO: any) {
//     const posts = this.postRepository.findOne(id);
//     Object.keys(editPostDTO).forEach(key => {
//         posts[key] = editPostDTO;
//     });
//     return this.postRepository.save();
//   }
}

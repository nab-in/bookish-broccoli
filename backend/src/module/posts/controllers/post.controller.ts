import { PostService } from '../services/post.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('api/posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Post()
  async createPost(@Body() createPostDTO: any) {
    return this.postService.createPost(createPostDTO);
  }
}

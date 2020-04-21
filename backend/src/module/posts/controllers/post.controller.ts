import { PostService } from '../services/post.service';
import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common';

@Controller('api/posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Post()
  async createPost(@Body() createPostDTO: any) {
    return this.postService.createPost(createPostDTO);
  }
  @Get()
  async getPosts() {
    return await this.postService.getPosts();
  }
  @Get(':post')
  async getOnePost(@Param() param){
      return this.postService.getPostById(param.post)

  }
  @Put(':post/editPost')
  async editPost(@Param() param: any, @Body() editPostDTO: any ){
    return await this.postService.editPost(param.post, editPostDTO)
  }
}

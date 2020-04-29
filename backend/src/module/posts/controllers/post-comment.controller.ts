import { Controller, Get } from '@nestjs/common';
import { CommentService } from '../services/post-coment.service';

@Controller('api/posts/comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get()
  async getComments() {
    await this.commentService.getAllComments();
  }
}

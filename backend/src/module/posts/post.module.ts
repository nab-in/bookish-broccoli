import { Module } from '@nestjs/common';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './entities/post.entity';
import { Comments } from './entities/post-comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Posts, Comments])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}

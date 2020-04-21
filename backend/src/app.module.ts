import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { getDataBaseConfiguration } from './core/base.configurations';
import { PostModule } from './module/posts/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(getDataBaseConfiguration()),
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
      ignoreEnvFile: true,
    }),
    PostModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

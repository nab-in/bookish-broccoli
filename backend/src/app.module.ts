import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { getDataBaseConfiguration } from './core/base.configurations';
import { PostModule } from './module/posts/post.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    TypeOrmModule.forRoot(getDataBaseConfiguration()),
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
      ignoreEnvFile: true,
    }),
    PostModule,
   GraphQLModule.forRoot({autoSchemaFile: 'schema.gpl'}),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

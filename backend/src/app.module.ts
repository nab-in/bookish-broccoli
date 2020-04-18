import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { getDataBaseConfiguration } from './core/base.configurations';

@Module({
  imports: [
    TypeOrmModule.forRoot(getDataBaseConfiguration()),
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
      ignoreEnvFile: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getConfiguration } from './core/base.configurations';
import * as compression from 'compression';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as session from 'express-session';
import * as helmet from 'helmet';
import {Logger} from '@nestjs/common'

const config = getConfiguration();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap')

  const options = new DocumentBuilder()
    .setTitle('NABIN Social API')
    .setDescription('API that will expose NABIN Social Interface')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.use(helmet());
  app.use(
    session({
      secret: 'secret-key',
      name: 'sess-tutorial',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(compression());
  await app.listen(config.port);
  logger.log(`App Listenig on Port, ${config.port}`)
}
bootstrap();

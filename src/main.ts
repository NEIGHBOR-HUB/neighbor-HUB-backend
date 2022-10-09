import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Neighbor HUB api')
    .setDescription('Api for idealization of the NHUB project')
    .setVersion('1.0')
    .addTag('NHUB')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000, () => {
    Logger.log(`[PORT]: ${3000}`);
  });
}
bootstrap();

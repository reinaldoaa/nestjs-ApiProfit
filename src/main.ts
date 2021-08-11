import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1'); //  http://website:port/api/version/endPointName

  const config = new DocumentBuilder()
    .setTitle('API PROFIT')
    .setDescription('FUERZA DE VENTAS')
    .setVersion('1.0')
    .addTag('ProfitAdmin')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document);

  await app.listen(AppModule.port);
  Logger.log(`http://localhost:puerto-->${AppModule.port}`,'Boostrap');
}
bootstrap();

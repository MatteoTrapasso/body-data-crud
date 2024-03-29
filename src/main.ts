import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors({
    origin: ['http://localhost:4200', 'https://body-data.herokuapp.com'],
  });
  const options = new DocumentBuilder()
    .setTitle('body-data-crud')
    .setDescription('CRUD per body-data')
    .setVersion('1.0')
    .addTag('body-data')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

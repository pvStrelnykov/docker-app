import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from './pipes/validation.pipe';


async function start() {
  const PORT = process.env.PORT || 3100
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Backend API')
    .setDescription('Documentation for the backend API')
    .setVersion('1.0')
    .addTag('Backend, Docker')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

start()
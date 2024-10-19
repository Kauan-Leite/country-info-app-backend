import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/AppModule';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // substitua pela URL do seu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // se você estiver lidando com cookies ou cabeçalhos de autenticação
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();

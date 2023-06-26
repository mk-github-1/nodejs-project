import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppController } from './app.controller';
import { LoginUserController } from './modules/login-user/login-user.controller';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // OpenAPI(swagger)の追加
    const config = new DocumentBuilder()
        .setTitle('OpenAPI(swagger)')
        .setDescription('OpenAPI(swagger) description')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document);

    await app.listen(5000);
}
bootstrap();

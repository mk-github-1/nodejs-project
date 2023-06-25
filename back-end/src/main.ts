import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // OpenAPI(swagger)の追加
    const config = new DocumentBuilder()
        .setTitle('OpenAPI(swagger)')
        //.setDescription('OpenAPI(swagger) description')
        .setVersion('1.0')
        .addTag('tags')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    /*
    const document = SwaggerModule.createDocument(app, config, {
        include: [AppController, LoginUserController],
    });
     */

    SwaggerModule.setup('api', app, document);

    await app.listen(5000);
}
bootstrap();

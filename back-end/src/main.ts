import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // OpenAPI(swagger)の設定を追加
    const config = new DocumentBuilder().setTitle('OpenAPI(swagger)').setDescription('OpenAPI(swagger) description').setVersion('1.0').build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document);

    // ValidationPipeの設定を追加
    app.useGlobalPipes(new ValidationPipe());

    // CORSの設定を追加
    const corsOptions: CorsOptions = {
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    };
    app.enableCors(corsOptions);

    await app.listen(5000);
}
bootstrap();

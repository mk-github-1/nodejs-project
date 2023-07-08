import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './database.config';
import { AppController } from './app.controller';
import { LoginUserController } from './modules/login-user/login-user.controller';
import { LoginUserModel } from './providers/domain-model/model/LoginUserModel';
import { LoginUserModule } from './modules/login-user/login-user.module';
// import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), LoginUserModule],
  controllers: [AppController],
})
export class AppModule {}

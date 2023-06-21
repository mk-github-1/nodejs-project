import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './database.config';

// modulesのパス
import { LoginUserController } from './modules/login-user/login-user.controller';
import { LoginUserService } from './modules/login-user/login-user.service';
import { LoginUserRepository } from './modules/login-user/login-user.repository';

// Providersのパス
import { LoginUser } from './providers/domain-model/entity/LoginUser';
import { Role } from './providers/domain-model/entity/Role';
import { LoginUserRole } from './providers/domain-model/entity/LoginUserRole';

@Module({
    imports: [
        TypeOrmModule.forRoot(databaseConfig),
        TypeOrmModule.forFeature([LoginUser, Role, LoginUserRole]),
    ],
    controllers: [AppController, LoginUserController],
    providers: [LoginUserService, LoginUserRepository],
})
export class AppModule {}

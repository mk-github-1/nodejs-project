import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './database.config';

// modulesのパス
import { LoginUserController } from './modules/login-user/login-user.controller';
import { LoginUserService } from './modules/login-user/login-user.service';

// Providersのパス
import { LoginUser } from './providers/domain-model/entity/LoginUser';
import { Role } from './providers/domain-model/entity/Role';
import { LoginUserRole } from './providers/domain-model/entity/LoginUserRole';

import { LoginUserRepository } from './providers/infrastructure/repository/login-user.repository';

@Module({
    imports: [
        TypeOrmModule.forRoot(databaseConfig),
        TypeOrmModule.forFeature([LoginUser, Role, LoginUserRole]),
    ],
    controllers: [AppController, LoginUserController],
    providers: [
        LoginUserService,
        /*
        {
            provide: 'ILoginUserRepository',
            useClass: LoginUserRepository,
        },
        */
    ],
})
export class AppModule {}

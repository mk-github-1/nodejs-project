import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './database.config';

// Providersのパス
import { LoginUserRole } from './providers/domain-model/entity/LoginUserRole';
import { LoginUserController } from './modules/login-user/login-user.controller';
import { LoginUserService } from './modules/login-user/login-user.service';

// エンティティが存在するフォルダへのパス
import { LoginUser } from './providers/domain-model/entity/LoginUser';
import { Role } from './providers/domain-model/entity/Role';

@Module({
    imports: [
        TypeOrmModule.forRoot(databaseConfig),
        TypeOrmModule.forFeature([LoginUser, Role, LoginUserRole]),
    ],
    controllers: [AppController, LoginUserController],
    providers: [LoginUserService],
})
export class AppModule {}

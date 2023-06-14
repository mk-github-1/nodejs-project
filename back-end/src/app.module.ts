import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '@/database.config';

// Providersのパス

// エンティティが存在するフォルダへのパス
import { LoginUser } from '@/providers/domain-model/entity/LoginUser';
import { Role } from '@/providers/domain-model/entity/Role';
import { LoginUserRole } from '@/providers/domain-model/entity/LoginUserRole';

// Repository
// import { LoginUserRepository } from '@/providers/domain-service/repository/loginUser.repository';

@Module({
    imports: [
        TypeOrmModule.forRoot(databaseConfig),
        // TypeOrmModule.forFeature([LoginUser, Role, LoginUserRole]),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

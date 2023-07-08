import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Providersのパス
import { LoginUser } from '@/providers/domain-model/entity/LoginUser';
import { Role } from '@/providers/domain-model/entity/Role';
import { LoginUserRole } from '@/providers/domain-model/entity/LoginUserRole';

import { LoginUserRepository } from '@/providers/infrastructure/repository/login-user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LoginUser, Role, LoginUserRole])],
  providers: [LoginUserRepository],
})
export class ShareProviderModule {}

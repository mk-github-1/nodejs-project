import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { LoginUserService } from './login-user.service';
import { LoginUserModel } from '@/providers/domain-model/model/LoginUserModel';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller('login-user')
export class LoginUserController {
    constructor(private readonly loginUserService: LoginUserService) {}

    @Get()
    async findAll(): Promise<LoginUserModel[]> {
        return this.loginUserService.findAll();
    }

    @Get(':account')
    async findById(@Param('account') account: string): Promise<LoginUserModel> {
        return this.loginUserService.findById(account);
    }

    @Post()
    async create(@Body() loginUserModel: LoginUserModel): Promise<void> {
        return this.loginUserService.create(loginUserModel);
    }

    @Put(':account')
    async update(
        @Param('account') account: string,
        @Body() loginUserModel: LoginUserModel,
    ): Promise<void> {
        return this.loginUserService.update(account, loginUserModel);
    }

    @Delete(':account')
    async delete(@Param('account') account: string): Promise<void> {
        return this.loginUserService.delete(account);
    }

    @Put('sort')
    async sort(@Body() sortLists: Record<string, number>[]): Promise<void> {
        return this.loginUserService.sort(sortLists);
    }
}

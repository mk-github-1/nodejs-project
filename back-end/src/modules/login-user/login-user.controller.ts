import { Body, Controller, Get, Param, Post, Put, Delete, Inject } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { ConstantTokens } from '@/providers/domain-model/constant/ConstantTokens';

import { LoginUserService } from './login-user.service';
import { LoginUserModel } from '@/providers/domain-model/model/LoginUserModel';

@ApiTags('login-user')
@Controller('login-user')
export class LoginUserController {
    constructor(
        @Inject(ConstantTokens.ILoginUserRepository)
        private readonly loginUserService: LoginUserService,
    ) {}

    @Get()
    @ApiOperation({ summary: 'Get all login-users' })
    @ApiResponse({ status: 200, description: 'Return an array of login-user.' })
    async findAll(): Promise<LoginUserModel[]> {
        return this.loginUserService.findAll();
    }

    @Get(':account')
    @ApiOperation({ summary: 'Get a login-user by account' })
    @ApiResponse({ status: 200, description: 'Return a login-user.' })
    async findById(@Param('account') account: string): Promise<LoginUserModel> {
        return this.loginUserService.findById(account);
    }

    @Post()
    @ApiOperation({ summary: 'Create a login-user' })
    @ApiResponse({ status: 201, description: 'Create a new login-user.' })
    async create(@Body() loginUserModel: LoginUserModel): Promise<void> {
        return this.loginUserService.create(loginUserModel);
    }

    @Put(':account')
    @ApiOperation({ summary: 'Update a login-user by account' })
    @ApiResponse({ status: 200, description: 'Update a login-user.' })
    async update(
        @Param('account') account: string,
        @Body() loginUserModel: LoginUserModel,
    ): Promise<void> {
        return this.loginUserService.update(account, loginUserModel);
    }

    @Delete(':account')
    @ApiOperation({ summary: 'Delete a login login-user by account' })
    @ApiResponse({ status: 204, description: 'Delete a login-user.' })
    async delete(@Param('account') account: string): Promise<void> {
        return this.loginUserService.delete(account);
    }

    @Put('sort')
    @ApiOperation({ summary: 'Sort login-users' })
    @ApiResponse({ status: 200, description: 'Sort login-users.' })
    async sort(@Body() sortLists: Record<string, number>[]): Promise<void> {
        return this.loginUserService.sort(sortLists);
    }
}

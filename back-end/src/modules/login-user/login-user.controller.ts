import { Body, Controller, Get, Param, Post, Put, Delete, Inject } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { ConstantTokens } from '@/providers/domain-model/constant/ConstantTokens';

import { LoginUserModel } from '@/providers/domain-model/model/LoginUserModel';
import { LoginUserService } from './login-user.service';
import { LoginUserDto, LoginUserRoleDto } from './dto/login-user.dto';

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
    async findAll(): Promise<Array<LoginUserDto>> {
        const loginUserModels: Array<LoginUserModel> = await this.loginUserService.findAll();

        // Entity to Model マッピング
        const loginUserDtos: Array<LoginUserDto> = loginUserModels.map((element) => {
            let loginUserDto: LoginUserDto = plainToClass(LoginUserDto, element, {
                excludeExtraneousValues: true,
            });

            if (element.loginUserRoleModels) {
                loginUserDto.loginUserRoleDtos = element.loginUserRoleModels.map((element2) => {
                    // 循環参照の回避
                    element2.loginUserModel = undefined;
                    element2.roleModel = undefined;

                    const loginUserRoleDto: LoginUserRoleDto = plainToClass(LoginUserRoleDto, element2, {
                        excludeExtraneousValues: true,
                    });

                    return loginUserRoleDto;
                }, []);
            }

            return loginUserDto;
        }, []);

        return loginUserDtos;
    }

    @Get(':account')
    @ApiOperation({ summary: 'Get a login-user by account' })
    @ApiResponse({ status: 200, description: 'Return a login-user.' })
    async findById(@Param('account') account: string): Promise<LoginUserDto> {
        const loginUserModel: LoginUserModel = await this.loginUserService.findById(account);

        // Model to Dtoマッピング
        let loginUserDto: LoginUserDto = plainToClass(LoginUserDto, loginUserModel, {
            excludeExtraneousValues: true,
        });

        if (loginUserModel.loginUserRoleModels) {
            loginUserDto.loginUserRoleDtos = loginUserModel.loginUserRoleModels.map((element) => {
                // 循環参照の回避
                element.loginUserModel = undefined;
                element.roleModel = undefined;

                const loginUserRoleDto: LoginUserRoleDto = plainToClass(LoginUserRoleDto, element, {
                    excludeExtraneousValues: true,
                });

                return loginUserRoleDto;
            }, []);
        }

        return loginUserDto;
    }

    @Post()
    @ApiOperation({ summary: 'Create a login-user' })
    @ApiResponse({ status: 201, description: 'Create a new login-user.' })
    async create(@Body() loginUserDto: LoginUserDto): Promise<void> {
        // Validationが有効か確認必要
        const loginUserModel: LoginUserModel = plainToClass(LoginUserModel, loginUserDto, {
            excludeExtraneousValues: true,
        });

        return await this.loginUserService.create(loginUserModel);
    }

    @Put(':account')
    @ApiOperation({ summary: 'Update a login-user by account' })
    @ApiResponse({ status: 200, description: 'Update a login-user.' })
    async update(@Param('account') account: string, @Body() loginUserDto: LoginUserDto): Promise<void> {
        // Validationが有効か確認必要
        const loginUserModel: LoginUserModel = plainToClass(LoginUserModel, loginUserDto, {
            excludeExtraneousValues: true,
        });

        return await this.loginUserService.update(account, loginUserModel);
    }

    @Delete(':account')
    @ApiOperation({ summary: 'Delete a login login-user by account' })
    @ApiResponse({ status: 204, description: 'Delete a login-user.' })
    async delete(@Param('account') account: string): Promise<void> {
        return await this.loginUserService.delete(account);
    }

    @Put('sort')
    @ApiOperation({ summary: 'Sort login-users' })
    @ApiResponse({ status: 200, description: 'Sort login-users.' })
    async sort(@Body() sortLists: Record<string, number>[]): Promise<void> {
        return this.loginUserService.sort(sortLists);
    }
}

import { Controller, Get } from '@nestjs/common';
import { LoginUserService } from './login-user.service';

@Controller('login-user')
export class LoginUserController {
    constructor(private readonly loginUserService: LoginUserService) {}

    @Get()
    getHello(): string {
        // return this.loginUserService.getHello();
        return 'loginUser Hello World!';
    }
}

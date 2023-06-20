import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginUserService {
    getHello(): string {
        return 'LoginUser Hello World!';
    }
}

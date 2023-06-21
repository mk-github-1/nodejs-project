import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginUserRepository {
    getHello(): string {
        return 'LoginUser Hello World!';
    }
}

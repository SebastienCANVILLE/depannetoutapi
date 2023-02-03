import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findByName(username); // modif faites ici
        const compareHashPassword = await bcrypt.compare(password, user.password)
        if (user && compareHashPassword) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        
        const payload = { username: user.username, sub: user.userId }; // A voir
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}

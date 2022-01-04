import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';
import { user } from "../users/entities/user.entity";
import { PayloadInterface } from './models/token.model';

@Injectable()
export class AuthService {

    constructor(private _usersService: UsersService, private _jwtService: JwtService) { }

    async validateUser(username: string, pass: string) {
        try {
            const findUserByEmail = await this._usersService.findUsersByEmail(username)
            if (!findUserByEmail) {
                throw new HttpException({
                    status: false,
                    message: 'User not foud or not exists'
                }, HttpStatus.NOT_FOUND)
            }


            if (!bcrypt.compareSync(pass, findUserByEmail.password)) {
                throw new HttpException({
                    status: false,
                    message: 'User not foud or not exists'
                }, HttpStatus.NOT_FOUND)
            }

            const { password, ...result } = findUserByEmail.toJSON()
            return result
        } catch (error) {
            throw new HttpException({
                status: false,
                error
            }, HttpStatus.BAD_REQUEST)
        }
    }

    gerateJwt(user: user) {
        const payload: PayloadInterface = { sub: user.id }
        return {
            acces_token: this._jwtService.sign(payload),
            user
        }
    }
}

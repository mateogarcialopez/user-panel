import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { user } from "../users/entities/user.entity";

@Controller('auth')
export class AuthController {

    constructor(private _authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    login(@Req() req: Request) {
        const user = req.user as user
        return this._authService.gerateJwt(user)
    }
}

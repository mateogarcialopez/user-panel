import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MongoIdPipe } from 'src/common/mongo-id.pipe';
import { UserDto, UserDtoUpdate } from './dtos/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private _userService: UsersService) { }

    @Post()
    createUser(@Body() userDto: UserDto) {
        return this._userService.createUser(userDto)
    }

    @Get('/:id')
    getUser(@Param('id', MongoIdPipe) id: string) {
        return this._userService.getUser(id)
    }

    @Get()
    getUsers() {
        return this._userService.getUsers()
    }

    @Put('/:id')
    updateUser(@Body() userDto: UserDtoUpdate, @Param('id', MongoIdPipe) id: string) {
        return this._userService.updateUser(id, userDto)
    }

    @Delete('/:id')
    deleteUser(@Param('id', MongoIdPipe) id: string) {
        return this._userService.deleteUser(id)
    }
}

import { Body, Controller, Delete, Get, Param, Post, Put, SetMetadata, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MongoIdPipe } from 'src/common/mongo-id.pipe';
import { UserDto, UserDtoUpdate } from './dtos/user.dto';
import { UsersService } from './users.service';
import { } from "bcrypt";
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { Public } from 'src/auth/decorators/public.decoratos';


@UseGuards(ApiKeyGuard)
@Controller('users')
@ApiTags('users')
export class UsersController {

    constructor(private _userService: UsersService) { }

    @Post()
    @ApiOperation({ description: 'this is a test description' })
    createUser(@Body() userDto: UserDto) {
        return this._userService.createUser(userDto)
    }

    @Get('/:id')
    @Public() // Is a custom decorator
    @ApiOperation({ description: 'this is a test description' })
    getUser(@Param('id', MongoIdPipe) id: string) {
        return this._userService.getUser(id)
    }

    @Get()
    @Public() // Is a custom decorator
    @ApiOperation({ description: 'this is a test description' })
    getUsers() {
        return this._userService.getUsers()
    }

    @Put('/:id')
    @ApiOperation({ description: 'this is a test description' })
    updateUser(@Body() userDto: UserDtoUpdate, @Param('id', MongoIdPipe) id: string) {
        return this._userService.updateUser(id, userDto)
    }

    @Delete('/:id')
    @ApiOperation({ description: 'this is a test description' })
    deleteUser(@Param('id', MongoIdPipe) id: string) {
        return this._userService.deleteUser(id)
    }

    
}

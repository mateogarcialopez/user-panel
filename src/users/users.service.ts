import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto, UserDtoUpdate } from './dtos/user.dto';
import { user } from './entities/user.entity';
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {

    constructor(@InjectModel(user.name) private _userModel: Model<user>) { }

    async createUser(userDto: UserDto) {
        try {
            const userData = new this._userModel(userDto)
            const hashPassword = await bcrypt.hashSync(userData.password, 10)
            userData.password = hashPassword
            const createUser = await userData.save()

            if (!createUser) {
                throw new HttpException({ status: false, message: "It was not possible save the user" }, HttpStatus.CONFLICT)
            }

            return {
                status: HttpStatus.OK,
                message: "User saved",
            }
        } catch (error) {
            throw new HttpException({ status: false, error }, HttpStatus.BAD_REQUEST)
        }
    }

    async getUser(id: string) {
        try {
            const user = await this._userModel.findById(id).exec()
            if (!user) {
                throw new NotFoundException('It was not possible get the user')
            }

            return {
                status: HttpStatus.OK,
                user
            }
        } catch (error) {
            throw new HttpException({ status: false, error }, HttpStatus.BAD_REQUEST)
        }
    }

    async getUsers() {
        try {
            const users = await this._userModel.find().exec()

            if (!users) {
                throw new HttpException({
                    status: false,
                    messae: 'WithOut Users'
                }, HttpStatus.NOT_FOUND)
            }

            return {
                status: true,
                users
            }

        } catch (error) {
            throw new HttpException({
                status: false,
                error
            }, HttpStatus.BAD_REQUEST)
        }
    }

    async updateUser(id: string, userDto: UserDtoUpdate) {
        try {
            const userToUpdate = await this._userModel.findByIdAndUpdate(id, { $set: userDto }, { new: true }).exec()

            if (!userToUpdate) {
                throw new HttpException({
                    status: false,
                    message: 'It was no possible to update the user'
                }, HttpStatus.NOT_FOUND)
            }

            return userToUpdate
        } catch (error) {
            throw new HttpException({
                status: false,
                error
            }, HttpStatus.BAD_REQUEST)
        }
    }

    async deleteUser(id: string) {
        try {
            const userToDelete = await this._userModel.findOneAndDelete({ id }).exec()

            if (!userToDelete) {
                throw new HttpException({
                    status: false,
                    message: 'It was no possible to delete the user'
                }, HttpStatus.NOT_FOUND)
            }

            return userToDelete
        } catch (error) {
            throw new HttpException({
                status: false,
                error
            }, HttpStatus.BAD_REQUEST)
        }
    }

    async findUsersByEmail(email: string) {
        const user = await this._userModel.findOne({ email })
        return user
    }
}

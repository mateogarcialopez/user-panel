import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { user, userSchema } from './entities/user.entity';

@Module({
  imports:[MongooseModule.forFeature([{name: user.name, schema: userSchema}])],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {

  
}

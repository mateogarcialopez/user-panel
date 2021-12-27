import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import { environments } from './environments';
import config from './config';
import * as joi from 'joi'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || ".env",
      isGlobal: true,
      load: [config],
      validationSchema: joi.object({
        PORT: joi.number().required(),
        ENVIRONMENT: joi.string().required()
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

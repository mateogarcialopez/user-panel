import { Global, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import config from '../config';
import { ConfigType } from "@nestjs/config";

@Global()
@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory: async (_configType: ConfigType<typeof config>) => ({
                uri: `${_configType.database.mongo_connection}://${_configType.database.mongo_user}:${_configType.database.mongo_password}@${_configType.database.mongo_host}:${_configType.database.mongo_port}/${_configType.database.mongo_db}`
            }),
            inject: [config.KEY]
        })
    ],
    exports: [MongooseModule]
})
export class DatabaseModule { }
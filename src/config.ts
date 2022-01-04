import { registerAs } from "@nestjs/config";
export default registerAs('config', () => {
    return {
        port: process.env.PORT,
        environment: process.env.ENVIRONMENT,
        database: {
            mongo_db: process.env.MONGO_DB,
            mongo_user: process.env.MONGO_USER,
            mongo_password: process.env.MONGO_PASSWORD,
            mongo_port: process.env.MONGO_PORT,
            mongo_host: process.env.MONGO_HOST,
            mongo_connection: process.env.MONGO_CONNECTION
        },
        token: process.env.TOKEN,
        secret: process.env.SECRET
    }
})
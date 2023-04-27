import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
    cache: getCacheConfig(),
});

function getCacheConfig(): any {
    if(process.env['CACHE'] === '1') {
        return {
            type: "redis",
            options: {
                host: "redis",
                port: 6379,
            },
            ignoreErrors: true,
        };
    } else {
        return false;
    }
}
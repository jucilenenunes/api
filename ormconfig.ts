import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const  ormconfig:TypeOrmModuleOptions = {
    "database": "./db.sql",
    "type": "sqlite",
    "synchronize": true,
    "entities": ["dist/**/*.model.js"]
};

export default ormconfig;
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const  ormconfig:TypeOrmModuleOptions = {
    type: 'mysql', 
    host: 'localhost',
    port: 3306, 
    username: 'root',
    password: '#449Cris!',
    database: 'db_registro_projetos',
    synchronize: true, 
    entities: ["dist/**/*.model.js"]
};

export default ormconfig;
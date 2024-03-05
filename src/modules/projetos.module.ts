import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjetosModel } from 'src/models/projetos.model';
import { ProjetosController } from 'src/controllers/projetos.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ProjetosModel])],
    controllers: [ProjetosController],
})

export class ProjetosModule {}


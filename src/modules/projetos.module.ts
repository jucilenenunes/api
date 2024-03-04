import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjetosController } from 'src/controllers/projetos.controller';
import { ProjetoModel } from 'src/models/projetos.model';

@Module({
    imports: [TypeOrmModule.forFeature([ProjetoModel])],
    controllers: [ProjetosController],
})

export class ProjetosModule {};


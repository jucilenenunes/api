import { Module } from '@nestjs/common'
import { ProjetosController } from 'src/controllers/projetos.controller'

@Module({
    controllers: [ProjetosController],
})

export class ProjetosModule {}


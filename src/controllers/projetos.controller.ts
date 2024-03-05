import {Controller, Get, Post, Put, Delete, Body, ParseIntPipe, Param, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjetosModel } from 'src/models/projetos.model';
import { ProjetosSchema } from 'src/schemas/projetos.schema';

@Controller('/projetos')
export class ProjetosController {
    constructor(@InjectRepository(ProjetosModel) private model: Repository<ProjetosModel>) {}
    
    @Post()
    public async create(@Body() body: ProjetosSchema): Promise<ProjetosModel> {
        const projetoCreated = await this.model.save(body);
        return projetoCreated;
      }

      @Get(':id')
      public async getOne(@Param('id', ParseIntPipe) id: number ): Promise<ProjetosModel> {
        const projetos = await this.model.findOne({ where: { id } });

        if (!projetos) {
            throw new NotFoundException(`Não localizado projeto selecionado!`);
        }
        return projetos;
      } 

    @Get()
    public async getAll(): Promise<ProjetosModel[]> {
        const list = await this.model.find();
        return list;
    } 

    @Put(':id')
    public async update(@Param('id', ParseIntPipe)id: number, @Body() body: ProjetosSchema): Promise<ProjetosModel> {
        const projetos = await this.model.findOne({ where: { id } });

        if (!projetos) {
            throw new NotFoundException(`Não localizado projeto ${id}!`);
        }

        await this.model.update({ id }, body );

        return await this.model.findOne({ where: { id } });
    } 

    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
        const projetos = await this.model.findOne({ where: { id } });

        if (!projetos) {
            throw new NotFoundException(`Não localizado projeto ${id}!`);
        }

        this.model.delete(id);

        return `O projeto ${id} foi excluído com sucesso!`
    } 
}
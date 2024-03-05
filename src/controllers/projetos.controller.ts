import {Controller, Get, Post, Put, Delete, Body, ParseIntPipe, Param, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjetosModel } from 'src/models/projetos.model';
import { ProjetosSchema } from 'src/schemas/projetos.schema';

@Controller('/projetos')
export class ProjetosController {
    constructor(@InjectRepository(ProjetosModel) private model: Repository<ProjetosModel>) {}
    
    @Post()
    public async create(@Body() body: ProjetosSchema): Promise<{ data: ProjetosModel }> {
        const projetoCreated = await this.model.save(body);
        return { data: projetoCreated };
      }

      @Get(':id')
      public async getOne(@Param('id', ParseIntPipe) id: number ): Promise<{ data: ProjetosModel }> {
        const projetos = await this.model.findOne({ where: { id } });

        if (!projetos) {
            throw new NotFoundException(`Não localizado projeto selecionado!`);
        }
        return{ data: projetos};
      } 

    @Get()
    public async getAll(): Promise<{ data: ProjetosModel[] }> {
        const list = await this.model.find();
        return { data: list};
    } 

    @Put(':id')
    public async update(@Param('id', ParseIntPipe)id: number, @Body() body: ProjetosSchema): Promise<{ data: ProjetosModel}> {
        const projetos = await this.model.findOne({ where: { id } });

        if (!projetos) {
            throw new NotFoundException(`Não localizado projeto ${id}!`);
        }

        await this.model.update({ id }, body );

        return { data: await this.model.findOne({ where: { id } }) };
    } 

    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number): Promise<{data: string}> {
        const projetos = await this.model.findOne({ where: { id } });

        if (!projetos) {
            throw new NotFoundException(`Não localizado projeto ${id}!`);
        }

        this.model.delete(id);

        return { data: `O projeto ${id} foi excluído com sucesso!`}
    } 
}
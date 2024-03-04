import {Controller, Get, Post, Put, Delete, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeOrm';
import { Repository } from 'typeorm';
import { ProjetoModel } from 'src/models/projetos.model';

@Controller('/projetos')
export class ProjetosController {
    constructor(@InjectRepository(ProjetoModel) private model: Repository<ProjetoModel>) {}
    @Post()
    public create(): any {
        return { data: 'Create!!!'}
    } 

    @Get(':id')      
    public getOne(): any {
        return { data: 'Get One!!!'}
    } 

    @Get()
    public async getAll(): Promise<{ data: ProjetoModel[] }> {
        const list = await this.model.find();
        return { data: list};
    } 

    @Put(':id')
    public update(): any {

        return { data: 'Update!!!'}
    } 

    @Delete(':id')
    public delete(): any {
        return { data: 'Delete!!!'}
    } 
}
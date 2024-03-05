import { IsInt, IsString, MaxLength } from 'class-validator';

export class ProjetosSchema {
    @IsInt()
    id: number;

    @IsString()
    @MaxLength(100)
    titulo: string;

    @IsString()
    @MaxLength(700)
    descricao: string;
    
    @IsString()
    @MaxLength(100)
    responsavel: string;
}
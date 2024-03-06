import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity("projetos")
export class ProjetosModel {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ length: 100 })
    titulo: string;

    @Column({ length: 700 })
    descricao: string;

    @Column({ length: 100 })
    responsavel:string;
}

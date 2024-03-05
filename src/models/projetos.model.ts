import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class ProjetosModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 120 })
    titulo: string;

    @Column({ length: 700 })
    descricao: string;

    @Column({ length: 120 })
    responsavel: string;
}
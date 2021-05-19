import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('images')
export default class Images {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;


    orphanage_id: number;
}
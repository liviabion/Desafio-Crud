import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Aspiring {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    age: number

    @Column()
    managerName: string

    @Column()
    psArea: string

    @Column()
    photo: string

}
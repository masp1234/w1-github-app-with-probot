import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Photo {
    @PrimaryColumn()
    id: number

    @Column({
        length: 100,
    })
    name: string
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
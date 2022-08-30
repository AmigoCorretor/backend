import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm"

import { Profile } from "./profile"

@Entity("tb_user")
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email: string
    
    @Column()
    idade: number

    @OneToOne(() => Profile)
    @JoinColumn({name: 'id_profile'})
    profile: Profile
}
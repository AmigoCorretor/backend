import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
// import { myDataSource } from "../app-data-source"

@Entity('tb_profile')
export class Profile {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name?: string

  @Column()
  phone?: string

  @Column()
  photo?: string
}

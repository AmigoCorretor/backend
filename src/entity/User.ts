import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Favorite } from './Favorite'
import { Post } from './Post'

@Entity('tb_user')
export class User {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  email?: string

  @Column()
  password?: string

  @Column()
  photo?: string

  @Column()
  name?: string

  @Column()
  isRealtor?: boolean

  @Column()
  creci?: string

  @Column()
  stars?: number

  @Column()
  completedSells?: number

  @Column()
  completedRents?: number

  @Column()
  phone?: string

  @OneToMany(() => Post, post => post.user)
  posts?: Post[]

  @OneToMany(() => Favorite, favorite => favorite.user)
  favorites?: Favorite[]

  // @OneToOne(() => Profile)
  // @JoinColumn({ name: 'id_profile' })
  // profile?: Profile
}

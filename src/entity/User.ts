import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Favorite } from './Favorite'
import { Post } from './Post'

@Entity('tb_user')
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true
  })
  email!: string

  @Column({
    type: 'varchar',
    nullable: true
  })
  bio!: string

  @Column({
    type: 'varchar',
    nullable: false
  })
  password!: string

  @Column({
    type: 'varchar',
    nullable: true
  })
  photo!: string

  @Column({
    type: 'varchar',
    nullable: true
  })
  name!: string

  @Column({
    type: 'boolean',
    nullable: true
  })
  isRealtor!: boolean

  @Column({
    type: 'varchar',
    unique: true,
    nullable: true
  })
  creci!: string

  @Column({
    type: 'float',
    nullable: true
  })
  stars!: number

  @Column({
    type: 'int',
    nullable: true
  })
  completedSells!: number

  @Column({
    type: 'int',
    nullable: true
  })
  completedRents!: number

  @Column({
    type: 'varchar',
    nullable: true
  })
  phone!: string

  @OneToMany(() => Post, post => post.user)
  posts!: Post[]

  @OneToMany(() => Favorite, favorite => favorite.user)
  favorites!: Favorite[]

  // @OneToOne(() => Profile)
  // @JoinColumn({ name: 'id_profile' })
  // profile?: Profile
}

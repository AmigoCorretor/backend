import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany
} from 'typeorm'
import { Favorite } from './Favorite'
import { Image } from './Image'
import { User } from './User'

@Entity('tb_post')
export class Post {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @Column({
    type: 'varchar',
    nullable: true
  })
  description!: string

  @Column({
    type: 'varchar',
    nullable: true
  })
  type!: string

  @Column({
    type: 'varchar',
    nullable: true
  })
  sellOrRent!: string

  @Column({
    type: 'boolean',
    nullable: true
  })
  available!: boolean

  @Column({
    type: 'float',
    nullable: true
  })
  price!: number

  @Column({
    type: 'float',
    nullable: true
  })
  latitude!: number

  @Column({
    type: 'float',
    nullable: true
  })
  longitude!: number

  @Column()
  totalArea!: number

  @Column({
    type: 'float',
    nullable: true
  })
  usefulArea!: number

  @Column({
    type: 'float',
    nullable: true
  })
  bathrooms!: number

  @Column({
    type: 'float',
    nullable: true
  })
  bedrooms!: number

  @Column({
    type: 'float',
    nullable: true
  })
  suites!: number

  @ManyToOne(() => User, user => user.posts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: User

  @OneToMany(() => Image, image => image.post)
  images!: Image[]

  @OneToMany(() => Favorite, favorite => favorite.post)
  favorites!: Favorite[]
}

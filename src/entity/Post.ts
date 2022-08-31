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
  id?: number

  @Column()
  title?: string

  @Column()
  description?: string

  @Column()
  totalArea?: string

  @Column()
  usefulArea?: string

  @Column()
  bathrooms?: string

  @Column()
  bedrooms?: string

  @Column()
  suites?: string

  @ManyToOne(() => User, user => user.posts)
  @JoinColumn({ name: 'user_id' })
  user?: User

  @OneToMany(() => Image, image => image.post)
  images?: Image[]

  @OneToMany(() => Favorite, favorite => favorite.post)
  favorites?: Favorite[]
}

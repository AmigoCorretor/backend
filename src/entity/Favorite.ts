import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Post } from './Post'
import { User } from './User'

@Entity('tb_favorite')
export class Favorite {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => User, user => user.favorites)
  @JoinColumn({ name: 'user_id' })
  user!: User

  @ManyToOne(() => Post, post => post.favorites)
  @JoinColumn({ name: 'post_id' })
  post!: Post
}

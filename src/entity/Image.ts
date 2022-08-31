import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm'
import { Post } from './Post'

@Entity('tb_image')
export class Image {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  link?: string

  @ManyToOne(() => Post, post => post.images)
  @JoinColumn({ name: 'post_id' })
  post?: Post
}

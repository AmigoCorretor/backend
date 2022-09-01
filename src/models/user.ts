import { Favorite } from '../entity/Favorite'
import { Post } from '../entity/Post'

export interface UserModel {
  id: number
  email: string
  password: string
  photo?: string
  name?: string
  isRealtor: boolean
  creci?: string
  stars?: number
  completedSells?: number
  completedRents?: number
  phone?: string
  posts?: Post[]
  favorites?: Favorite[]
}

import { DataSource } from 'typeorm'
import * as dotenv from 'dotenv'
import { User } from './entity/User'
import { Post } from './entity/Post'
import { Image } from './entity/Image'
import { Favorite } from './entity/Favorite'
dotenv.config()

export const myDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: process.env.PG_PASSWORD,
  database: 'AmigoCorretor',
  // entities: [".src/entity/*.ts"],
  // entities: [User, Product, Profile, Categoria, Produto, Usuario, Foto],
  entities: [User, Post, Image, Favorite],
  // entities: ["dist/**/*./entity/*.ts"],
  // entities: ["dist/**/*.entity.js"],
  logging: false,
  synchronize: true
  // migrations: [/*...*/],
})

//https://typeorm.io/example-with-express

import { DataSource } from 'typeorm'
import * as dotenv from 'dotenv'
import { User } from './entity/User'
import { Post } from './entity/Post'
import { Image } from './entity/Image'
import { Favorite } from './entity/Favorite'
dotenv.config()

export const myDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT!,
  username: process.env.DB_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.DB_DATABASE,
  // entities: [".src/entity/*.ts"],
  // entities: [User, Product, Profile, Categoria, Produto, Usuario, Foto],
  entities: [User, Post, Image, Favorite],
  // entities: ["dist/**/*./entity/*.ts"],
  // entities: ["dist/**/*.entity.js"],
  logging: false,
  synchronize: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
  // migrations: [/*...*/],
})

//https://typeorm.io/example-with-express

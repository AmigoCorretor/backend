import { DataSource } from 'typeorm'

// import { Produto } from "./entity/desafio/Produto"

export const myDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'postgres',
  // entities: [".src/entity/*.ts"],
  // entities: [User, Product, Profile, Categoria, Produto, Usuario, Foto],
  entities: [],
  // entities: ["dist/**/*./entity/*.ts"],
  // entities: ["dist/**/*.entity.js"],
  logging: false,
  synchronize: true
})

//https://typeorm.io/example-with-express

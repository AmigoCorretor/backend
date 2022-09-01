import { RequestHandler } from 'express'
import { myDataSource } from '../data-source'
import { User } from '../entity/User'

// post
export const createUser: RequestHandler = async (req, res, next) => {
  const id = Math.random()
  const { email, password, isRealtor } = req.body
  // const newUser: UserModel = { id, email, password, isRealtor }
  // USERS.push(newUser)
  const user = await myDataSource.getRepository(User).create(req.body)
  const results = await myDataSource.getRepository(User).save(user)
  res.status(201).json({ message: 'Created new user.', results })
}

// get
export const getUsers: RequestHandler = async (req, res, next) => {
  const users = await myDataSource.getRepository(User).find()
  res.status(200).json({ users })
}

// get
export const getUserById: RequestHandler = async (req, res, next) => {
  const results = await myDataSource.getRepository(User).findOneBy({
    id: +req.params.id
  })
  res.status(200).json(results)
}

// patch
export const updateUserById: RequestHandler = async (req, res, next) => {
  const user = await myDataSource.getRepository(User).findOneBy({
    id: +req.params.id
  })
  if (user) {
    myDataSource.getRepository(User).merge(user, req.body)
    const results = await myDataSource.getRepository(User).save(user)
    res.status(200).json(results)
  }
}

// delete
export const deleteUserById: RequestHandler = async (req, res, next) => {
  const results = await myDataSource.getRepository(User).delete(+req.params.id)
  res.status(200).json(results)
}

// export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
//   const id = req.params.id
//   const todoIndex = TODOS.findIndex(todo => todo.id === id)
//   if (todoIndex < 0) {
//     throw new Error('Could not find todo!')
//   }
//   const deletedTodo = TODOS[todoIndex]
//   TODOS.splice(todoIndex, 1)
//   res.status(200).json({ message: 'Todo updated!', deletedTodo })
// }

// export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
//   const id = req.params.id
//   const text = (req.body as { text: string }).text
//   const todoIndex = TODOS.findIndex(todo => todo.id === id)
//   if (todoIndex < 0) {
//     throw new Error('Could not find todo!')
//   }
//   TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, text)
//   res
//     .status(200)
//     .json({ message: 'Todo updated!', updatedTodo: TODOS[todoIndex] })
// }

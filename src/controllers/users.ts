import { RequestHandler } from 'express'
import { User } from '../models/user'

let USERS: User[] = []

export const createUser: RequestHandler = (req, res, next) => {
  const id = Math.random()
  const { email, password } = req.body
  const newUser = new User(id, email, password)
  USERS.push(newUser)
  res.status(201).json({ message: 'Created new user.', createdUser: newUser })
}

export const getUsers: RequestHandler = (req, res, next) => {
  res.status(200).json({ users: USERS })
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

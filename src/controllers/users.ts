import { RequestHandler } from 'express'
import { myDataSource } from '../data-source'
import { User } from '../entity/User'
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Image } from '../entity/Image'

// post
export const createUser: RequestHandler = async (req, res, next) => {
  let rawUser: User = req.body

  bcrypt.hash(rawUser.password, 10, async (error, hash) => {
    rawUser = { ...rawUser, password: hash }
    if (error) {
      res.status(500).json({ message: 'Error while creating user', error })
    } else {
      const user = myDataSource.getRepository(User).create(rawUser)
      try {
        const results = await myDataSource.getRepository(User).save(user)
        res.status(201).json({ message: 'Created new user.', results })
      } catch (e) {
        res
          .status(500)
          .json({ message: 'Error while creating new user.', error: e })
      }
    }
  })

  // const user = await myDataSource.getRepository(User).create(req.body)
  // const results = await myDataSource.getRepository(User).save(user)
  // res.status(201).json({ message: 'Created new user.', results })
}
// login
export const loginUser: RequestHandler = async (req, res, next) => {
  let user: User = req.body

  const results = await myDataSource
    .getRepository(User)
    .createQueryBuilder('user')
    .where('user.email = :email', { email: req.body.email })
    .getOne()

  if (results) {
    const isCorrectPassword = await bcrypt.compare(
      user.password,
      results.password
    )
    if (isCorrectPassword) {
      const payload = {
        name: results.name,
        email: results.email,
        isRealtor: results.isRealtor
      }
      let token = jwt.sign({ id: results.id }, process.env.JWT_KEY!)
      return res.status(201).json({ payload, token })
    } else {
      res.status(401).json({ message: 'Incorrect password.' })
    }
  } else {
    res.status(406).json({ message: 'User not found.' })
  }
}

// get
export const getUsers: RequestHandler = async (req, res, next) => {
  // const users = await myDataSource.getRepository(User).find()

  const users = await myDataSource
    .getRepository(User)
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.posts', 'post')
    .leftJoinAndSelect('user.favorites', 'favorite')
    .getMany()

  res.status(200).json(users)
}

// get
export const getUserById: RequestHandler = async (req, res, next) => {
  // const results = await myDataSource.getRepository(User).findOneBy({
  //   id: +req.params.id
  // })

  const results = await myDataSource
    .getRepository(User)
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.posts', 'post')
    .leftJoinAndSelect('post.images', 'image')
    .leftJoinAndSelect('user.favorites', 'favorite')
    .leftJoinAndSelect('favorite.user', 'userFav')
    .where('user.id = :id', { id: +req.params.id })
    .getOne()

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
  } else {
    res.status(500).json({ message: 'User not found' })
  }
}

// delete
export const deleteUserById: RequestHandler = async (req, res, next) => {
  const results = await myDataSource.getRepository(User).delete(+req.params.id)
  res.status(200).json(results)
}

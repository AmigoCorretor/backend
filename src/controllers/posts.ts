import { RequestHandler } from 'express'
import { myDataSource } from '../data-source'
import { Post } from '../entity/Post'

// post
export const createPost: RequestHandler = async (req, res, next) => {
  const post = await myDataSource.getRepository(Post).create(req.body)
  const results = await myDataSource.getRepository(Post).save(post)
  res.status(201).json({ message: 'Created new post.', results })
}

// get
export const getPosts: RequestHandler = async (req, res, next) => {
  const posts = await myDataSource.getRepository(Post).find()
  res.status(200).json(posts)
}

// get
export const getPostById: RequestHandler = async (req, res, next) => {
  const results = await myDataSource.getRepository(Post).findOneBy({
    id: +req.params.id
  })
  res.status(200).json(results)
}

// patch
export const updatePostById: RequestHandler = async (req, res, next) => {
  const user = await myDataSource.getRepository(Post).findOneBy({
    id: +req.params.id
  })
  if (user) {
    myDataSource.getRepository(Post).merge(user, req.body)
    const results = await myDataSource.getRepository(Post).save(user)
    res.status(200).json(results)
  } else {
    res.status(500).json({ message: 'User not found' })
  }
}

// delete
export const deletePostById: RequestHandler = async (req, res, next) => {
  const results = await myDataSource.getRepository(Post).delete(+req.params.id)
  res.status(200).json(results)
}

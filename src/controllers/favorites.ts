import { RequestHandler } from 'express'
import { myDataSource } from '../data-source'
import { Favorite } from '../entity/Favorite'

// post
export const createFavorite: RequestHandler = async (req, res, next) => {
  const favorite = await myDataSource.getRepository(Favorite).create(req.body)
  const results = await myDataSource.getRepository(Favorite).save(favorite)
  res.status(201).json({ message: 'Created new favorite.', results })
}

// get
export const getFavorites: RequestHandler = async (req, res, next) => {
  const favorites = await myDataSource.getRepository(Favorite).find()
  // .createQueryBuilder('tb_favorite')
  res.status(200).json(favorites)
}

// get
export const getFavoriteById: RequestHandler = async (req, res, next) => {
  const results = await myDataSource.getRepository(Favorite).findOneBy({
    id: +req.params.id
  })
  res.status(200).json(results)
}

// patch
export const updateFavoriteById: RequestHandler = async (req, res, next) => {
  const favorite = await myDataSource.getRepository(Favorite).findOneBy({
    id: +req.params.id
  })
  if (favorite) {
    myDataSource.getRepository(Favorite).merge(favorite, req.body)
    const results = await myDataSource.getRepository(Favorite).save(favorite)
    res.status(200).json(results)
  } else {
    res.status(500).json({ message: 'Favorite not found' })
  }
}

// delete
export const deleteFavoriteById: RequestHandler = async (req, res, next) => {
  const results = await myDataSource
    .getRepository(Favorite)
    .delete(+req.params.id)
  res.status(200).json(results)
}

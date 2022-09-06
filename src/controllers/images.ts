import { RequestHandler } from 'express'
import { myDataSource } from '../data-source'
import { Image } from '../entity/Image'

// post
export const createImage: RequestHandler = async (req, res, next) => {
  const image = await myDataSource.getRepository(Image).create(req.body)
  const results = await myDataSource.getRepository(Image).save(image)
  res.status(201).json({ message: 'Created new image.', results })
}

// get
export const getImages: RequestHandler = async (req, res, next) => {
  // const images = await myDataSource.getRepository(Image).find()

  const images = await myDataSource
    .getRepository(Image)
    .createQueryBuilder('image')
    .leftJoinAndSelect('image.post', 'post')
    .getMany()

  res.status(200).json(images)
}

// get
export const getImageById: RequestHandler = async (req, res, next) => {
  // const results = await myDataSource.getRepository(Image).findOneBy({
  //   id: +req.params.id
  // })

  const results = await myDataSource
    .getRepository(Image)
    .createQueryBuilder('image')
    .leftJoinAndSelect('image.post', 'post')
    .getOne()

  res.status(200).json(results)
}

// patch
export const updateImageById: RequestHandler = async (req, res, next) => {
  const image = await myDataSource.getRepository(Image).findOneBy({
    id: +req.params.id
  })
  if (image) {
    myDataSource.getRepository(Image).merge(image, req.body)
    const results = await myDataSource.getRepository(Image).save(image)
    res.status(200).json(results)
  } else {
    res.status(500).json({ message: 'Image not found' })
  }
}

// delete
export const deleteImageById: RequestHandler = async (req, res, next) => {
  const results = await myDataSource.getRepository(Image).delete(+req.params.id)
  res.status(200).json(results)
}

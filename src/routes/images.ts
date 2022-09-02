import { Router } from 'express'

import {
  createImage,
  deleteImageById,
  getImageById,
  getImages,
  updateImageById
} from '../controllers/images'

const router = Router()

router.route('/').post(createImage).get(getImages)
router
  .route('/:id')
  .get(getImageById)
  .patch(updateImageById)
  .delete(deleteImageById)

export default router

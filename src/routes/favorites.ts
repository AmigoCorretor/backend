import { Router } from 'express'

import {
  createFavorite,
  deleteFavoriteById,
  getFavoriteById,
  getFavorites,
  updateFavoriteById
} from '../controllers/favorites'

const router = Router()

router.route('/').post(createFavorite).get(getFavorites)
router
  .route('/:id')
  .get(getFavoriteById)
  .patch(updateFavoriteById)
  .delete(deleteFavoriteById)

export default router

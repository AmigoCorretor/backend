import { Router } from 'express'

import {
  createPost,
  deletePostById,
  getPostById,
  getPosts,
  updatePostById
} from '../controllers/posts'

const router = Router()

router.route('/').post(createPost).get(getPosts)
router
  .route('/:id')
  .get(getPostById)
  .patch(updatePostById)
  .delete(deletePostById)

export default router

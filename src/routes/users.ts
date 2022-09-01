import { Router } from 'express'

import {
  createUser,
  deleteUserById,
  getUserById,
  getUsers,
  updateUserById
} from '../controllers/users'

const router = Router()

router.route('/').post(createUser).get(getUsers)
router
  .route('/:id')
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById)

export default router

import { Router } from 'express'

import { createUser, getUsers } from '../controllers/users'

const router = Router()

router.route('/').post(createUser).get(getUsers)

// router.route('/:id').patch(updateTodo).delete(deleteTodo)

export default router

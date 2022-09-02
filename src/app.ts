import express, { Request, Response, NextFunction } from 'express'
import { myDataSource } from './data-source'
import usersRoutes from './routes/users'
import postsRoutes from './routes/posts'
import imagesRoutes from './routes/images'
import favoritesRoutes from './routes/favorites'

// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch(err => {
    console.error('Error during Data Source initialization:', err)
  })

// create and setup express app
const app = express()
app.use(express.json())

// routes used
app.use('/users', usersRoutes)
app.use('/posts', postsRoutes)
app.use('/images', imagesRoutes)
app.use('/favorites', favoritesRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Running server on http://localhost:${PORT}`)
})

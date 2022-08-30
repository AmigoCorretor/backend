import express, { Request, Response, NextFunction } from 'express'
import usersRoutes from './routes/users'

const app = express()
app.use(express.json())

app.use('/users', usersRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Running server on http://localhost:${PORT}`)
})

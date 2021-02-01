import { Router } from 'express'
import UserController from '../controllers/UserController'
import auth from '../middlewares/auth'

const usersRoutes = Router()
const userController = new UserController()

usersRoutes.get('/', auth, userController.index)
usersRoutes.post('/', userController.create)

export default usersRoutes

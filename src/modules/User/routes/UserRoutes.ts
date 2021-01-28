import { Router } from 'express'
import UserController from '../controllers/UserController'

const usersRoutes = Router()
const userController = new UserController()

usersRoutes.get('/', userController.index)
usersRoutes.post('/', userController.create)

export default usersRoutes

import { Router } from 'express'
import SessionController from '../controllers/SessionController'

const sessionController = new SessionController()
const sessionRoutes = Router()

sessionRoutes.post('/', sessionController.create)

export default sessionRoutes

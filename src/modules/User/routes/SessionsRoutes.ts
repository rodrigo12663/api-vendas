import { Router } from 'express'
import SessionsController from '../controllers/SessionsController'

const SessionsRoutes = Router()
const sessionsController = new SessionsController()

SessionsRoutes.post('/', sessionsController.create)

export default SessionsRoutes

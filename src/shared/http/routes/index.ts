
import ProductRoutes from '@models/Product/routes/ProductRoutes'
import SessionsRoutes from '@models/User/routes/SessionsRoutes'
import UserRoutes from '@models/User/routes/UserRoutes'

import express from 'express'
const routes = express.Router()

routes.use('/products', ProductRoutes)
routes.use('/users', UserRoutes)
routes.use('/sessions', SessionsRoutes)

export default routes

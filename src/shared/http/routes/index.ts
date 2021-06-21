
import ProductRoutes from '@models/Product/routes/ProductRoutes'
import SessionRoutes from '@models/User/routes/SessionRoutes'
import UserRoutes from '@models/User/routes/UserRoutes'

import express from 'express'
const routes = express.Router()

routes.use('/products', ProductRoutes)
routes.use('/users', UserRoutes)
routes.use('/sessions', SessionRoutes)

export default routes


import ProductRoutes from '@models/Product/routes/ProductRoutes'
import UserRoutes from '@models/User/routes/UserRoutes'

import express from 'express'
const routes = express.Router()

routes.use('/products', ProductRoutes)
routes.use('/users', UserRoutes)

export default routes

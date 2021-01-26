import ProductRoutes from '@models/products/routes/ProductRoutes'

import express from 'express'
const routes = express.Router()

routes.use('/products', ProductRoutes)

export default routes

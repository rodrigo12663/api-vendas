import ProductRoutes from '@shared/app/routes/ProductRoutes'
import express from 'express'
const routes = express.Router()

routes.use('/products', ProductRoutes)

export default routes

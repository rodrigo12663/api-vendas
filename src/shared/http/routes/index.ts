
import ProductRoutes from '@models/Product/routes/ProductRoutes'
<<<<<<< HEAD
import SessionsRoutes from '@models/User/routes/SessionsRoutes'
import UserRoutes from '@models/User/routes/UserRoutes'
=======
>>>>>>> parent of a2974c0... added modules user

import express from 'express'
const routes = express.Router()

routes.use('/products', ProductRoutes)
<<<<<<< HEAD
routes.use('/users', UserRoutes)
routes.use('/sessions', SessionsRoutes)
=======
>>>>>>> parent of a2974c0... added modules user

export default routes


import ProductRoutes from '@models/Product/routes/ProductRoutes'
<<<<<<< HEAD
<<<<<<< HEAD
import SessionsRoutes from '@models/User/routes/SessionsRoutes'
=======
>>>>>>> parent of db1398a... added sessions
import UserRoutes from '@models/User/routes/UserRoutes'
=======
>>>>>>> parent of a2974c0... added modules user

import express from 'express'
const routes = express.Router()

routes.use('/products', ProductRoutes)
<<<<<<< HEAD
routes.use('/users', UserRoutes)
<<<<<<< HEAD
routes.use('/sessions', SessionsRoutes)
=======
>>>>>>> parent of a2974c0... added modules user
=======
>>>>>>> parent of db1398a... added sessions

export default routes

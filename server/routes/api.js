import {Router} from 'express'
import userRoutes from './userRoute.js'
import postRoutes from './postRoute.js'
const router = Router();

router.use('/user',userRoutes )
router.use('/post', postRoutes)

export default router;
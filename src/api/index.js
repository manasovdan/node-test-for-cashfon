import { Router } from 'express'
import box from './box'

const router = new Router()

router.use('/boxes', box)

export default router

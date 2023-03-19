import express from 'express'
import { login } from '../controllers/auth.js'

const router = express.Router()

/* /login will be suffixed to /auth --> i.e. /auth/login */
router.post('/login', login)

export default router
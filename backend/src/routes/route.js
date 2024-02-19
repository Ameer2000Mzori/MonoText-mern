import express from 'express'
import {
  homePage,
  getArticle,
  createArticle,
  createAccount,
  login,
  getUsers,
} from '../controllers/controller.js'
import { guard } from '../middlewares/token.js'

const router = express.Router()

//  articles routes
router.get('/', homePage)
router.get('/article', getArticle)
router.post('/article', guard, createArticle)

// users routes
router.get('/user', guard, getUsers)
router.post('/user', createAccount)
router.post('/login', login)

export default router

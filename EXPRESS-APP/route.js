import express from 'express';
import {userLogin, userSignup} from './controller.js';

const router = express.Router();

router.get('/user/login', userLogin)
router.get('/user/signup', userSignup)

export default router;
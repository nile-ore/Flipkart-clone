import express from 'express';
import { userSignup } from '../controller/usersignup.js';
import { getProducts } from '../controller/productcontoller.js'

const router = express.Router();

// router.post('/signup',userSignup);
router.post('/signup',userSignup);

router.get('/products',getProducts);

export default router;
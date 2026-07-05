import express from  'express';
import { userSignUp, userLogin } from '../controller/user.controller.js';

const router = express.Router();


//login & signup
router.post('/signup', userSignUp);
router.post('.login', userLogin);


export default router;











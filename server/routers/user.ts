import { Router } from 'express';
import bodyParser from 'body-parser';
import {
    checkAuth,
    checkUserInfo
} from '../middlewares/user';
import { 
    checkLogin,
    getProfile, 
    getUserList, 
    login, 
    register,
} from '../controllers/user';
import { userInfo } from 'os';

const router = Router();
const jsonParser = bodyParser.json();



router.post('/api/user/register', jsonParser, checkUserInfo, register);
router.post('/api/user/login', jsonParser,  checkUserInfo, login);
router.post('/api/user/profile', jsonParser, checkAuth, getProfile);
router.post('/api/user/checkLogin', jsonParser, checkAuth, checkLogin);
router.get('/api/user/getUserList', getUserList)
// 洋葱模型演示🧅
// router.get('/test', (req, res, next) => {
//     console.log(1);
//     next();
//     console.log(11);
// }, function (req, res, next) {
//     console.log(2);
//     next();
//     console.log(22);
// }, function (req, res, next) {
//     console.log(3);
//     console.log(33);
// })

export default router;

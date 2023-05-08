import {
    Request,
    Response,
    NextFunction
} from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import  { config as dotEnvConfig } from 'dotenv';
import { IUserInfo } from '../controllers/user';
import user from '../schema/user';

dotEnvConfig();

export function checkAuth(req: Request, res: Response, next: NextFunction) {
    const auth = req.headers.authorization
    if(!auth) {
        return res.status(200).json({
            success: false,
            err_code: 1005,
            err_msg: 'the api must take the Authorization'
        });
    }

    const rawToken = auth.split(' ')[1];
    // 解密 验证token
    try {
        const tokenData = jwt.verify(rawToken, process.env.SECRET_KEY!) as JwtPayload;
        if (!tokenData) {
            res.status(200).json({
                success: false,
                err_code: 1006,
                err_msg: 'Invalid token'
            });
        }
        //传递id
        req.id = tokenData.id!;
        next();
    } catch(e) {
        res.status(200).json({
            success: false,
            err_code: 1007,
            err_msg: 'token varify failed'
        });
    }
}


export function checkUserInfo(req: Request, res: Response, next: NextFunction) {
    const { password, username }: IUserInfo = req.body;
    console.log(password, username);
    if (username.length < 6 || password.length < 6) {
        res.status(200).json({
            success: false,
            err_code: 1001,
            err_msg: 'Invalid username or password length'
        });
    } else {
        next();
    }
}
import {
    Request,
    Response,
} from 'express';
import UserModel from '../models/user';
import bcript from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config as dotEnvConfig } from 'dotenv';

dotEnvConfig();

const { SECRET_KEY } = process.env;

export interface IUserInfo {
    username: string;
    password: string;
}

export async function register(req: Request, res: Response) {
    const { password, username }: IUserInfo = req.body;
    try {
        // 添加数据
        const user = await UserModel.addUser({
            username,
            password
        })
        res.status(200).json({
            success: true,
            msg: 'ok',
            data: user
        });
    } catch (e) {
        res.status(200).json({
            err_code: 1002,
            err_msg: 'the username existed in database'
        })
    }

}

export async function login(req: Request, res: Response) {
    const { username, password } = req.body;
    
    const userInfo = await UserModel.getUser(username);
    // 查询用户是否存在
    if (!userInfo) {
        res.status(200).json({
            success: false,
            err_code: 1003,
            err_msg: 'the username does not exist in database'
        })
        return;
    }
    // 密码验证
    const isValidpassword = bcript.compareSync(password, userInfo?.password!);
    if (!isValidpassword) {
        res.status(200).json({
            success: false,
            err_code: 1004,
            err_msg: 'Got a wrong password'
        });
        return;
    }
    // token生成
    const userToken = jwt.sign({
        id: String(userInfo?._id!)
    }, SECRET_KEY!, {
        expiresIn: '60s'
    });
    res.status(200).json({
        success: true,
        msg: 'ok',
        data: {
            username: userInfo?.username,
            level: userInfo?.level,
            user_token: userToken
        }
    });
}

export async function getProfile(req: Request, res: Response) {
    const { id } = req;
    const userInfo = await UserModel.getProfile(id!);
    
    res.status(200).json({
        success: true,
        msg: 'ok',
        data: userInfo
    });
}

export async function getUserList(req: Request, res: Response) {
    const users = await UserModel.getUserList();
    res.status(200).json(users);
}

export async function checkLogin(req: Request, res: Response) {
    res.status(200).json({
        success: true,
        msg: 'ok'
    });
}



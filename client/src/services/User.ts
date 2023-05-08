import http from '@/libs/http';
import { IUserInfo, IResponse } from '@/types';
export async function loginService(userInfo: IUserInfo) {
    return await http.post<unknown, IResponse>('/api/user/login', userInfo);  
}

export async function registerService(userInfo: IUserInfo) {
    return await http.post<unknown, IResponse>('/api/user/register', userInfo);
}

export async function checkLoginService() {
    return await http.post<unknown, IResponse>('/api/user/checkLogin')
}

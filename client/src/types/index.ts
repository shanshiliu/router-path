export interface IUserInfo {
    username: string;
    password: string;
}

export interface IResponse {
    success: boolean;
    err_code?: string;
    err_msg?: string;
    msg?: string;
    data?: any;
}

export interface ICommon {
    [key: string]: string
}

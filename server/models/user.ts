import { IUserInfo } from "../controllers/user";
import { userModel } from "../db";

async function addUser(userInfo: IUserInfo) {
    return await userModel.create(userInfo);
}

async function getUserList() {
    // await userModel.remove({ username: 'ryanliu'})
    return await userModel.find();
}

async function getUser(username: string) {
    // await userModel.remove({ username: 'ryanliu'})
    return await userModel.findOne({ username });
}

async function getProfile(id: string) {
    const user = await userModel.findOne({ _id: id});
    return user ? {
        uid: user._id,
        username: user.username,
        level: user.level
    } : null
}

// 使用命名空间，较少混乱
export default {
    addUser,
    getUserList,
    getUser,
    getProfile
}
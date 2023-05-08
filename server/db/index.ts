import dbConnect from "./connect";
import userSchema from '../schema/user'
const db = dbConnect();
// console.log(userSchema);

export const userModel = db.model('User', userSchema);

// 删除表
// userModel.collection.drop();

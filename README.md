# 后端路由权限设计

使用mongoDB 动态数据库（增删改查效率高，安全性低，准确性低 MySQL是静态数据存储容器，增删改查效率低，安全性高，准确性高） ts node搭建后台登陆注册服务
下载mongodb
mongodb启动执行命令 sudo ./mongod --dbpath /Users/Ryan/mongodb/data/db  默认端口27071

## 主要框架库

全局依赖：
express nodejs快速搭建服务器框架
mongoose 操作mongoDB数据工具  sequelize 操作MySQL数据库工具
typescript js超集
bcrypt 加密算法工具 bcryptjs、crypto
jsonwebtoken 签名加密 id + SECRET_KEY -> token
dotenv  不同环境变量使用 .env .env.development .env.production
开发环境依赖：
ts-node-env 监听ts动态编译代替nodemon
@types/express
@types/mongoose
@types/node
@types/jsonwebtoken
@types/bcrypt

tsc --init ts配置文件  typeRoots 配置类型文件夹 ./types

REST Client VSCode插件 代替postman测试api

## 关于洋葱模型

请求与响应分离 先从到下处理请求、再从下到上处理响应
中间件优点： 程序模块化执行

## 项目目录

api-test 接口测试
controllers 接口服务逻辑
middlewares 中间件
model 数据操作相关
routers 接口路由地址
schema 数据库表操作

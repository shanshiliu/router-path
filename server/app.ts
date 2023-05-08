import express from 'express';
import UserRouter from './routers/user'
const app = express();

// 支持跨域
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTION');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Request-With');
    res.header('Content-type', 'application/json;charset=urf-8');
    next();
})

app.use(UserRouter);

app.listen(8000, () => {
    console.log('server is running');
})

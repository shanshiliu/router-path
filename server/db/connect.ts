import mongoose from 'mongoose';

export default function dbConnect() {
    mongoose.set('strictQuery', false);
    mongoose.connect(
        'mongodb://127.0.0.1:27017/test'
    );
    const db = mongoose.connection;

    db.on('error', function(err) {
        console.log('database connect error', err);
    });
    db.on('close', function () {
        console.log('Database closed');
    });
    db.on('open', function() {
        console.log('Database opened');
    });
    return db; 
}

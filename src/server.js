import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();
mongoose.connect('',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app
    .use(express.json())
    .use(routes)
    .listen(3141)
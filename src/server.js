const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const routes = require('./routes')

const app = express();
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-m6dlt.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app
    .use(express.json())
    .use(routes)
    .use(cors)
    .listen(3141)
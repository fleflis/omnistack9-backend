const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express();
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-m6dlt.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app
    .use(express.json())
    .use(routes)
    .listen(3141)
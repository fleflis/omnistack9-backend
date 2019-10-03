const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const routes = require('./routes')

const app = express();
mongoose.connect('mongodb://omnistack:omnistack@omnistack-shard-00-00-m6dlt.mongodb.net:27017,omnistack-shard-00-01-m6dlt.mongodb.net:27017,omnistack-shard-00-02-m6dlt.mongodb.net:27017/omnistack?ssl=true&replicaSet=omnistack-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app
    .use(cors())
    .use(express.json())
    .use(routes)
    .listen(3141)
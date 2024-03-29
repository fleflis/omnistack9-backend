const mongoose = require('mongoose')

const spotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true
    }
})

spotSchema.virtual('thumbnail_url').get(function() {
    return `http://192.168.15.26:3141/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', spotSchema);
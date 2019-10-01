import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email : String
})

module.exports = mongoose.model('User', userSchema);
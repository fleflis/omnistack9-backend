import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    data: Date,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
})

module.exports = mongoose.model('Booking', bookingSchema);
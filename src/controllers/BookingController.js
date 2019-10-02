import Booking from '../models/Booking';

module.exports = {
    async store(req, res) {
        const { userId } = req.headers;
        const { spotId } = req.params;
        const { date } = req.body;

        let booking = await Booking.create({
            user: userId,
            spot: spotId,
            date
        });

        return res.json(booking)
    }
}
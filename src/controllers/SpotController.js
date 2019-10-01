import Spot from '../models/Spot'
import User from '../models/User'

module.exports = {
    async store(req,res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { userId } = req.headers;

        const user = await User.findById(userId)

        if (!user) {
            return res
                .status(400)
                .json({ error : 'Usuário não existe.'})
        }

        const spot = await Spot.create({
            user: userId,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json({ ok : true})
    }
}
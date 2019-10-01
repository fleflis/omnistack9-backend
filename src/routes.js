import { Router } from 'express';

const routes = Router();

routes.post('/users', (req,res) => {
    res.json(req.body)
})

module.exports = routes;
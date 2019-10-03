// Módulos gerais
const { Router } = require('express')
const multer = require('multer')

// Configurações 
const uploadConfig = require('./config/upload')

// Controllers
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes = Router();
const upload = multer(uploadConfig)


routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail') , SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spotId/bookings', BookingController.store);



module.exports = routes;
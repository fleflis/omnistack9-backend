// Módulos gerais
import { Router } from 'express';
import multer from 'multer';

// Configurações 
import uploadConfig from './config/upload';

// Controllers
import SessionController from './controllers/SessionController';
import SpotController from './controllers/SpotController';
import DashboardController from './controllers/DashboardController';
import BookingController from './controllers/BookingController';

const routes = Router();
const upload = multer(uploadConfig)


routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail') , SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spotId/bookings', BookingController.show);



module.exports = routes;
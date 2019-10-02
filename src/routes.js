// Módulos gerais
import { Router } from 'express';
import multer from 'multer';

// Configurações 
import uploadConfig from './config/upload';

// Controllers
import SessionController from './controllers/SessionController';
import SpotController from './controllers/SpotController';

const routes = Router();
const upload = multer(uploadConfig)


routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail') , SpotController.store);
routes.get('/spots', SpotController.index);

module.exports = routes;
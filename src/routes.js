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
routes.post('/sessions', upload.single('thumbnail') , SpotController.store);

module.exports = routes;
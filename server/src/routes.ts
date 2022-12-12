import express from 'express';
import UserController from '@controllers/UserController'
import AspiringController from '@controllers/AspiringController'

const routes = express.Router();
const userController = new UserController();
const aspiringController = new AspiringController();


routes.post('/user', userController.create);


//rotas Aspiring
routes.post('/aspiring', aspiringController.create);
routes.get('/aspiring', aspiringController.get);
routes.delete('/aspiring/:id', aspiringController.delete);
routes.put('/aspiring/:id', aspiringController.update);
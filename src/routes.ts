import { Router } from "express";
import multer from 'multer';
import uploadConfig from '../src/config/uploads'
import OrphanagesController from "./controllers/OrphanagesController";

const route = Router();
const upload = multer(uploadConfig);
route.get('/list-orphanages', OrphanagesController.index);
route.get('/orphanage/:id', OrphanagesController.show);
route.post('/create-orphanage', upload.array('images'), OrphanagesController.create);

export default route;
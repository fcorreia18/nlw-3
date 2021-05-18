import { Router } from "express";
import OrphanagesController from "./controllers/OrphanagesController";

const route = Router();

route.get('/list-orphanages', OrphanagesController.index);
route.get('/orphanage/:id', OrphanagesController.show);
route.post('/create-orphanage', OrphanagesController.create);

export default route;
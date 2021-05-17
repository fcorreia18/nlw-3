import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import Orphanages from './models/Orphanages'

const route = Router();

route.post('/create-orphanage', async (req: Request, res: Response) => {
    const { name, longitude, latitude, open_on_weekends, opening_hours, instrutions, about } = req.body;
    const orphanagesRepository = getRepository(Orphanages);

    const orphanage = orphanagesRepository.create({ name, longitude, latitude, open_on_weekends, opening_hours, instrutions, about });
    await orphanagesRepository.save(orphanage);

    res.status(200).json(orphanage);
});

export default route;
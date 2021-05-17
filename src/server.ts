import express, { Application, Request, Response } from 'express'
import { getRepository } from "typeorm";
import Orphanages from './models/Orphanages'
import './database/connection';

const app: Application = express();
app.use(express.json());

app.post('/create-orphanage', async (req: Request, res: Response) => {
    const { name, longitude, latitude, open_on_weekends, opening_hours, instrutions, about } = req.body;
    const orphanagesRepository = getRepository(Orphanages);

    const orphanage = orphanagesRepository.create({ name, longitude, latitude, open_on_weekends, opening_hours, instrutions, about });
    await orphanagesRepository.save(orphanage);

    console.log(req.body);
    res.json({ "res": "requisição feita com sucesso" });
});

app.listen(3333);
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Orphanages from "../models/Orphanage";
import orphanages_view from "../views/orphanages_view";
export default {
    async show(req: Request, res: Response) {
        const { id } = req.params;
        const orphanagesRepository = getRepository(Orphanages);
        const orphanage = await orphanagesRepository.findOneOrFail(id, { relations: ['images'] });
        return res.status(200).json(orphanages_view.render(orphanage));
    },

    async index(req: Request, res: Response) {
        const orphanagesRepository = getRepository(Orphanages);
        const orphanages = await orphanagesRepository.find({ relations: ['images'] });
        return res.status(200).json(orphanages_view.renderMany(orphanages));
    },

    async create(req: Request, res: Response) {
        const {
            name,
            longitude,
            latitude,
            open_on_weekends,
            opening_hours,
            instrutions,
            about
        } = req.body;
        const orphanagesRepository = getRepository(Orphanages);

        const requestImages = req.files as Express.Multer.File[];
        const images = requestImages.map(image => { return { path: image.filename } })

        const orphanage = orphanagesRepository.create({
            name,
            longitude,
            latitude,
            open_on_weekends,
            opening_hours,
            instrutions,
            about,
            images
        });
        await orphanagesRepository.save(orphanage);

        res.status(201).json(orphanage);
    }
}
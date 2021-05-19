import { Request } from 'express';
import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', 'uploads'),
        filename: (req: Request, file: Express.Multer.File, callback): void => {
            const fileName = `${Date.now()}-${file.originalname}`;
            callback(null, fileName);
        }
    }),

}
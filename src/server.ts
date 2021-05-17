import express, { Application, Request, Response } from 'express';
import './database/connection';

const app: Application = express();
app.use(express.json());

app.post('/:id', (req: Request, res: Response) => {
    res.json({ "res": "requisição feita com sucesso" });
    console.log(req.params);
    console.log(req.body);
});

app.listen(3333);
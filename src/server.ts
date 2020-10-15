import express from 'express';
import './database/connection';

const app = express();
app.use(express.json());

app.post('/:id', (req, res) => {
    res.json({ "res": "requisição feita com sucesso" });
    console.log(req.params);
    console.log(req.body);
});

app.listen(3333);
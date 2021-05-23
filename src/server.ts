import express, { Application, static } from 'express'
import path from 'path'
import 'express-async-errors'
import './database/connection';
import route from './routes';
const app: Application = express();
app.use(express.json());
app.use(route);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.listen(3333);
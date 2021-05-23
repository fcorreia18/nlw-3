import express, { Application } from 'express'
import cors from 'cors';
import path from 'path'
import 'express-async-errors'
import './database/connection';
import route from './routes';
import errorHandler from './error/handler'

const app: Application = express();

app.use(cors)
app.use(express.json());
app.use(route);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333);
import express, { Application } from 'express'
import path from 'path'
import cors from 'cors';
import 'express-async-errors'
import './database/connection';
import route from './routes';
import errorHandler from './error/handler'

const app: Application = express();

app.use(express.json());
app.use(route);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)
app.use(cors)

app.listen(3333, () => console.log("Listening on port 3333"));
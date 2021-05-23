import express, { Application } from 'express'
import 'express-async-errors'
import './database/connection';
import route from './routes';
const app: Application = express();
app.use(express.json());
app.use(route);

app.listen(3333);
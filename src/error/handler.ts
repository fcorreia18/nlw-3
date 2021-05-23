import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err);

    return res.status(500).json({ message: 'Internal Server Error' })
}


export default errorHandler;
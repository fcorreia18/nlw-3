import { ErrorRequestHandler } from "express";
import { ValidationError } from 'yup'

interface ValidationErrors {
    [key: string]: string[]
}
const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    console.log(error);
    if (error instanceof ValidationError) {
        let errors: ValidationErrors = {};

        error.inner.forEach(err => {
            errors[err.path!] = error.errors;
        });
        return res.status(400).json({ message: 'Validation Fails', errors });
    }
    return res.status(500).json({ message: 'Internal Server Error' })
}


export default errorHandler;
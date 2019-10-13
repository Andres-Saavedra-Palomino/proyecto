import httpStatus = require("http-status-codes")
import { IError } from "../interfaces/IError"


const catchAsync = (ftn: (req, res, next) => Promise<any>) => {
	return (rq, rs, nx) => {
		return ftn(rq, rs, nx).catch(error => {
			const err: IError = new Error(error.message)
			err.status = 500
			nx(err)

		})
	}
}

const pathNotFound = (req, res, next) => {
	const error: IError = new Error("Ruta no encontrada")
	error.status = 404

	next(error)
}

const generalError = (error: IError, req, res, next) => {
	const entorno: string = process.env.NODE_ENV

	if (entorno != "production")
		return res
			.status(error.status)
			.json({
				status: error.status,
				message: error.message,
				stack: error.stack
			})

	res
		.status(error.status)
		.json({
			status: error.status,
			message: error.message
		})

}


export { catchAsync, pathNotFound, generalError }
import express = require("express")
import * as http from "http"
import { IRequest } from './interfaces/IRequest'
import { RouterUsers, RouterTenants } from "./routes"
import * as bodyParser from "body-parser"
import { initializeDataBase } from "./conection/services/database.service"
import { generalError, pathNotFound } from "./handlers/errors.handler"

const yenv = require("yenv")
const env = yenv()

let httpServer: http.Server
let app = express()


const initialize = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		httpServer = http.createServer(app)

		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({ extended: false }))

		app.use("/admin", (req: IRequest, res, next) => {
			req.isAuthenticated = true
			next()
		})

		app.use("/admin", (req, res) => {
			res.json({ status: 409, message: "This account is not allowed to use this service" })
		})

		app.use("/tenants", RouterTenants)
		app.use("/users", RouterUsers)

		app.use(pathNotFound)
		app.use(generalError)

		httpServer.listen(env.PORT)
			.on("listening", () => resolve())
			.on("error", err => reject(err))
	})
}

const start = async () => {
	try {
		console.log("Iniciando servidor")
		await initialize()
		console.log("Servidor ejecutándose")

	} catch (error) {
		console.log("Ocurrió un error")
		console.log(error)

	}
	try {
		console.log("Connecting to MongoDB")
		await initializeDataBase()
		console.log("Connection Successful")
	} catch (error) {
		console.log("Connection Error")
		console.log(error)
	}
}

start()

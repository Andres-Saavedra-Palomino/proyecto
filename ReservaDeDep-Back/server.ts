import express = require("express")
import * as http from "http"
import { OfRequest } from './interfaces/OfRequest'
import { RouterRenters, RouterTenants } from "./routes"

let httpServer: http.Server
let app = express()
const port = 3000


const initialize = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		httpServer = http.createServer(app)

		app.use("/admin", (req: OfRequest, res, next) => {
			req.isAuthenticated = true
			next()
		})

		app.use("/admin", (req, res) => {
			res.json({ status: 409, message: "This account is not allowed to use this service" })
		})

		app.use("/tenants", RouterTenants)
		app.use("/renters", RouterRenters)

		httpServer.listen(port)
			.on("listening in port " + port, () => resolve())
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
}

start()

import mongoose = require('mongoose')
import configDatabase = require('../config/database.config')
import { resolve } from 'dns'


const initializeDataBase = async () => {
	mongoose.Promise = global.Promise

	const promiseConnection = new Promise((resolve, reject) => {
		mongoose.connect(configDatabase.connectionString, {
			keepAlive: true,
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true
		})

		mongoose.connection.on("connected", () => {
			require("../models").User

			resolve()
		})
		mongoose.connection.on("error", error => {
			console.log("Ocurrio un error")
			console.log(error)
			reject(error)
		})
	})
	await promiseConnection
}

export { initializeDataBase }

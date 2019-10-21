import GenericController from "./generic.controller";
import { Users } from '../models'
import httpStatus = require("http-status-codes")
import bcrypt = require("bcrypt")
import { crearToken } from "../../conection/services/token.service";

class Controller extends GenericController {
	constructor() {
		super(Users)
	}
	async login(req, res) {
		const data = req.body

		const usuario: any = await Users.findOne({ email: data.email.trim().toLowerCase() })

		if (usuario) {
			const coincidencia = await bcrypt.compare(data.password, usuario.password)

			if (coincidencia) {
				const token = crearToken(usuario._id)

				res
					.status(httpStatus.OK)
					.json({
						status: httpStatus.OK,
						results: {
							token
						}
					})
			} else {
				res
					.status(httpStatus.UNAUTHORIZED)
					.json({
						status: httpStatus.UNAUTHORIZED,
						message: "Email and/or password invalid"
					})
			}
		} else {
			res
				.status(httpStatus.UNAUTHORIZED)
				.json({
					status: httpStatus.UNAUTHORIZED,
					message: "User is not logged"
				})
		}
	}

	async registrar(req, res) {
		const data = req.body
		console.log(data)
		data.password = await bcrypt.hash(data.password, 10)

		const newUser = new Users(data)
		await newUser.save()

		res
			.status(httpStatus.CREATED)
			.json({
				status: httpStatus.CREATED,
				message: "Usuario agregado"
			})

	}
}

export default Controller
class GenericController {

	constructor(private model: any) {
		this.list = this.list.bind(this)
		this.thisOne = this.thisOne.bind(this)
		this.insert = this.insert.bind(this)
		this.update = this.update.bind(this)
		this.delete = this.delete.bind(this)
	}

	async list(req, res, next) {
		const data = await this.model.find()

		res
			.status(200)
			.json(data)
	}

	thisOne(req, res) {
		res.status(200).type("application/json").send({ name: "Fullstack Detalle", ruta: req.url, userId: ` ${req.params._id}` })
	}

	async insert(req, res) {
		const data = req.body
		console.log("insertando...")
		const users = new this.model(data)
		console.log(users)
		await users.save()
		console.log("insertado exitoso")

		res
			.status(201)
			.json({
				status: 200,
				message: "Usuario agregado"
			})
	}

	async update(req, res) {
		const _id = req.params._id

		await this.model.findOneAndUpdate({ _id }, req.body)

		res.send("Documento actualizado")
	}

	async delete(req, res) {
		const _id = req.params._id

		await this.model.findOneAndRemove({ _id })

		res.send("Documento eliminado")
	}
}

export default GenericController
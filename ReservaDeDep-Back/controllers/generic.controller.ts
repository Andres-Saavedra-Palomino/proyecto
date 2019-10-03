class GenericController {

	constructor(private model: any) {
		this.list = this.list.bind(this)
		this.thisOne = this.thisOne.bind(this)
		this.insert = this.insert.bind(this)
		this.update = this.update.bind(this)
		this.delete = this.delete.bind(this)
	}

	list(req, res) {
		res.status(200).type("application/json").send({ name: this.model + " Fullstack", ruta: req.url, model: this.model })
	}

	thisOne(req, res) {
		res.status(200).type("application/json").send({ name: "Fullstack Detalle", ruta: req.url, userId: ` ${req.params.id}` })
	}

	insert(req, res) {
		res
			.status(201)
			.json({
				status: 200,
				message: "Usuario agregado"
			})
	}

	update(req, res) {
		res
			.status(201)
			.json({
				status: 201,
				message: `Usuario actualizado`
			})
	}

	delete(req, res) {
		res
			.status(201)
			.json({
				status: 201,
				message: "Usuario eliminado"
			})
	}
}

export default GenericController
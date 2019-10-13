import httpStatus = require("http-status-codes")



class GenericController {

	constructor(private model: any) {
		this.list = this.list.bind(this)
		this.thisOne = this.thisOne.bind(this)
		this.insert = this.insert.bind(this)
		this.update = this.update.bind(this)
		this.delete = this.delete.bind(this)
	}

	async list(req, res, next) {
		const results = await this.model.find()

		res
			.status(httpStatus.OK)
			.json({
				status: httpStatus.OK,
				message: "List",
				results
			})
	}

	async thisOne(req, res) {
		const data = req.params // {_id: 'ccccc'}

		const result = await this.model.findOne(data)

		res
			.status(httpStatus.OK)
			.json({
				status: httpStatus.OK,
				message: "Document Found",
				result
			})

	}

	async insert(req, res) {
		const data = req.body

		const usuario = new this.model(data)
		await usuario.save()

		res
			.status(httpStatus.CREATED)
			.json({
				status: httpStatus.CREATED,
				message: "User added"
			})
	}

	async update(req, res) {
		const params = req.params // {_id: "dddd"}
		const body = req.body

		await this.model.findOneAndUpdate(params, body)

		res
			.status(httpStatus.CREATED)
			.json({
				status: httpStatus.CREATED,
				message: "Document updated"
			})
	}

	async delete(req, res) {
		const params = req.params

		await this.model.findOneAndRemove(params)

		res
			.status(httpStatus.CREATED)
			.json({
				status: httpStatus.CREATED,
				message: "Document deleted"
			})
	}
}

export default GenericController
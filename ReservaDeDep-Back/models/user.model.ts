import mongoose = require('mongoose')

const schema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: {
		type: String,
		email: true,
		required: true,
		size: 255,
		unique: true,
		lowercase: true,
	},
	password: {
		type: String,
		trim: true,
		required: true,
	},
})

const model = mongoose.model("User", schema)

export default model
const validador = esquemas => {
	return (req, res, next) => {
		let valido

		["params", "query", "body", "headers"].forEach(el => {
			if (esquemas[el] && (!valido || !valido.error)) {
				valido = esquemas[el].validate(req[el])
			}
		})

		if (valido.error) return res.status(422).json(valido.error.details)

		next()
	}
}

export default validador
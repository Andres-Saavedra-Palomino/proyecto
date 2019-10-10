import GenericController from "./generic.controller";
import { Users } from '../models'


class Controller extends GenericController {
	constructor() {
		super(Users)
	}
}

export default Controller
import GenericController from "./generic.controller";
import { User } from '../models'


class Controller extends GenericController {
	constructor() {
		super(User)
	}
}

export default Controller
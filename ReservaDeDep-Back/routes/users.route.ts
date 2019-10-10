import { ControllerUsers } from '../controllers';
import express = require("express")

const Router = express.Router()
const controller = new ControllerUsers()

Router.get("/", controller.list)
//@validators(schemaRenters.getUsersThisOne)
Router.get("/:id/:level", controller.thisOne)
Router.post("/", controller.insert)
Router.put("/", controller.update)
Router.delete("/", controller.delete)

export default Router
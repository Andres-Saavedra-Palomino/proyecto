import { ControllerUsers } from '../controllers';
import express = require("express")

const Router = express.Router()
const controller = new ControllerUsers()

Router.get("/", controller.list)
//@validators(schemaUsers.getUsersThisOne)
Router.get("/:id", controller.thisOne)
Router.post("/", controller.insert)
Router.put("/:_id", controller.update)
Router.delete("/:_id", controller.delete)

export default Router
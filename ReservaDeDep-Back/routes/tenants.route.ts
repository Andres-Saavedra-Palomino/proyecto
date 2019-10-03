import { ControllerTenants } from '../controllers';
import express = require("express")

const Router = express.Router()
const controller = new ControllerTenants()

Router.get("/", controller.list)
Router.get("/:id", controller.thisOne)
Router.post("/", controller.insert)
Router.put("/", controller.update)
Router.delete("/", controller.delete)

export default Router
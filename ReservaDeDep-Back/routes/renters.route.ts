import { ControllerRenters } from '../controllers/';
import express = require("express")

const Router = express.Router()
const controller = new ControllerRenters()

Router.get("/", controller.list)
Router.get("/detalle", controller.thisOne)
Router.post("/", controller.insert)
Router.put("/", controller.update)
Router.delete("/", controller.delete)

export default Router
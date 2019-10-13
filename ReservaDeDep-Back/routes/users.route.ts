import { ControllerUsers } from '../api-rest/controllers';
import express = require("express")
import { catchAsync } from "../handlers/errors.handler"

const Router = express.Router()
const controller = new ControllerUsers()

Router.get("/", catchAsync(controller.list))
//@validators(schemaUsers.getUsersThisOne)
Router.get("/:_id", catchAsync(controller.thisOne))
Router.post("/", catchAsync(controller.insert))
Router.put("/:_id", catchAsync(controller.update))
Router.delete("/:_id", catchAsync(controller.delete))

export default Router
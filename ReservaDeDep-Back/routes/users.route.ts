import { ControllerUsers } from '../api-rest/controllers';
import express = require("express")
import { catchAsync } from "../handlers/errors.handler"
import { authentication } from '../conection/policies/security.policy';

const Router = express.Router()
const controller = new ControllerUsers()

Router.get("/", authentication, catchAsync(controller.list))
//@validators(schemaUsers.getUsersThisOne)
Router.get("/:_id", catchAsync(controller.thisOne))
Router.post("/", catchAsync(controller.insert))
Router.post("/login", catchAsync(controller.login))
Router.post("/registrar", catchAsync(controller.registrar))
Router.put("/:_id", catchAsync(controller.update))
Router.delete("/:_id", catchAsync(controller.delete))

export default Router
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers/");
const express = require("express");
const Router = express.Router();
const controller = new controllers_1.ControllerRenters();
Router.get("/", controller.list);
Router.get("/detalle", controller.thisOne);
Router.post("/", controller.insert);
Router.put("/", controller.update);
Router.delete("/", controller.delete);
exports.default = Router;
//# sourceMappingURL=renters.route.js.map
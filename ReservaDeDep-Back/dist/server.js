"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const routes_1 = require("./routes");
const bodyParser = require("body-parser");
const database_service_1 = require("./services/database.service");
let httpServer;
let app = express();
const port = 3000;
const initialize = () => {
    return new Promise((resolve, reject) => {
        httpServer = http.createServer(app);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use("/admin", (req, res, next) => {
            req.isAuthenticated = true;
            next();
        });
        app.use("/admin", (req, res) => {
            res.json({ status: 409, message: "This account is not allowed to use this service" });
        });
        app.use("/tenants", routes_1.RouterTenants);
        app.use("/users", routes_1.RouterUsers);
        httpServer.listen(port)
            .on("listening in port " + port, () => resolve())
            .on("error", err => reject(err));
    });
};
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Iniciando servidor");
        yield initialize();
        console.log("Servidor ejecutándose");
    }
    catch (error) {
        console.log("Ocurrió un error");
        console.log(error);
    }
    try {
        console.log("Connecting to MongoDB");
        yield database_service_1.initializeDataBase();
        console.log("Connection Successful");
    }
    catch (error) {
        console.log("Connection Error");
        console.log(error);
    }
});
start();
//# sourceMappingURL=server.js.map
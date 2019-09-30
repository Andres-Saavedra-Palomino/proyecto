"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenericController {
    constructor(model) {
        this.model = model;
        this.list = this.list.bind(this);
        this.thisOne = this.thisOne.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    list(req, res) {
        res.type("application/json").send({ name: this.model + " Fullstack", ruta: req.url, model: this.model });
    }
    thisOne(req, res) {
        res.type("application/json").send({ name: "Fullstack Detalle", ruta: req.url });
    }
    insert(req, res) {
        res
            .status(201)
            .json({
            status: 200,
            message: "Usuario agregado"
        });
    }
    update(req, res) {
        res
            .status(201)
            .json({
            status: 201,
            message: "Usuario actualizado"
        });
    }
    delete(req, res) {
        res
            .status(201)
            .json({
            status: 201,
            message: "Usuario eliminado"
        });
    }
}
exports.default = GenericController;
//# sourceMappingURL=generic.controller.js.map
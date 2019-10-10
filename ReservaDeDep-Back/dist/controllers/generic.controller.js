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
class GenericController {
    constructor(model) {
        this.model = model;
        this.list = this.list.bind(this);
        this.thisOne = this.thisOne.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    list(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.model.find();
            res
                .status(200)
                .json(data);
        });
    }
    thisOne(req, res) {
        res.status(200).type("application/json").send({ name: "Fullstack Detalle", ruta: req.url, userId: ` ${req.params._id}` });
    }
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            console.log("insertando...");
            const users = new this.model(data);
            console.log(users);
            yield users.save();
            console.log("insertado exitoso");
            res
                .status(201)
                .json({
                status: 200,
                message: "Usuario agregado"
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = req.params._id;
            yield this.model.findOneAndUpdate({ _id }, req.body);
            res.send("Documento actualizado");
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = req.params._id;
            yield this.model.findOneAndRemove({ _id });
            res.send("Documento eliminado");
        });
    }
}
exports.default = GenericController;
//# sourceMappingURL=generic.controller.js.map
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
const httpStatus = require("http-status-codes");
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
            const results = yield this.model.find();
            res
                .status(httpStatus.OK)
                .json({
                status: httpStatus.OK,
                message: "List",
                results
            });
        });
    }
    thisOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.params; // {_id: 'ccccc'}
            const result = yield this.model.findOne(data);
            res
                .status(httpStatus.OK)
                .json({
                status: httpStatus.OK,
                message: "Document Found",
                result
            });
        });
    }
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const usuario = new this.model(data);
            yield usuario.save();
            res
                .status(httpStatus.CREATED)
                .json({
                status: httpStatus.CREATED,
                message: "User added"
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = req.params; // {_id: "dddd"}
            const body = req.body;
            yield this.model.findOneAndUpdate(params, body);
            res
                .status(httpStatus.CREATED)
                .json({
                status: httpStatus.CREATED,
                message: "Document updated"
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = req.params;
            yield this.model.findOneAndRemove(params);
            res
                .status(httpStatus.CREATED)
                .json({
                status: httpStatus.CREATED,
                message: "Document deleted"
            });
        });
    }
}
exports.default = GenericController;
//# sourceMappingURL=generic.controller.js.map
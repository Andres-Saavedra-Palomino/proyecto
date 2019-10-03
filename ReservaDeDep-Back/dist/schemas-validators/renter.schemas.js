"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
const esquemas = {
    getRentersThisOne: {
        params: Joi.object().keys({
            id: Joi.number(),
            nivel: Joi.string().regex(/^[a-zA-Z]{2}[0-9]{4,10}$/)
        }),
        query: Joi.object().keys({
            titulo: Joi.string().regex(/^[A-Z]{4,}$/).required()
        })
    }
};
exports.default = esquemas;
//# sourceMappingURL=renter.schemas.js.map
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schemas = void 0;
exports.validateSchema = validateSchema;
const joi_1 = __importDefault(require("joi"));
function validateSchema(schema, property) {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        try {
            switch (property) {
                case 'query':
                    yield schema.validateAsync(req.query);
                    break;
                case 'params':
                    yield schema.validateAsync(req.params);
                    break;
                default:
                    yield schema.validateAsync(req.body);
            }
            next();
        }
        catch (error) {
            return res.status(422).json({ message: "Object validation failed, please include a valid object" });
        }
    });
}
exports.Schemas = {
    user: {
        create: joi_1.default.object({
            role: joi_1.default.string().valid('PATRON', 'INSTRUCTOR', 'TEACHER'),
            firstName: joi_1.default.string().required(),
            lastName: joi_1.default.string().required(),
            email: joi_1.default.string().regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/).required(),
            password: joi_1.default.string().required()
        }),
        login: joi_1.default.object({
            email: joi_1.default.string().regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/).required(),
            password: joi_1.default.string().required()
        }),
        userId: joi_1.default.object({
            userId: joi_1.default.string().regex(/^[0-9a-fA-F]{24}$/).required()
        }),
        update: joi_1.default.object({
            _id: joi_1.default.string().regex(/^[0-9a-fA-F]{24}$/),
            role: joi_1.default.string().valid('PATRON', 'INSTRUCTOR', 'TEACHER'),
            firstName: joi_1.default.string(),
            lastName: joi_1.default.string(),
            email: joi_1.default.string().regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/),
            password: joi_1.default.string()
        })
    }
};
exports.default = {};

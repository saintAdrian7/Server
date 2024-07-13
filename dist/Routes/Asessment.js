"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Asessment_1 = require("../Controllers/Asessment");
const router = express_1.default.Router();
router.get('/:id', Asessment_1.getAllQuestions);
router.post('/:courseId', Asessment_1.CreateQuestion);
router.patch('/:id', Asessment_1.UpdateQuestion);
router.delete('/:id', Asessment_1.DeleteQuestion);
exports.default = router;

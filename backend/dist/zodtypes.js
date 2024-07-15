"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.inputTodo = void 0;
const zod_1 = __importDefault(require("zod"));
exports.inputTodo = zod_1.default.object({
    title: zod_1.default.string(),
    description: zod_1.default.string()
});
exports.updateTodo = zod_1.default.object({
    id: zod_1.default.string()
});

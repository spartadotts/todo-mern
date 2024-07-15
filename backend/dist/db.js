"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URL = process.env.MONGO_DB_URL || "";
console.log(MONGO_URL);
mongoose_1.default.connect(MONGO_URL);
const todoSchema = new mongoose_1.default.Schema({
    title: String,
    description: String,
    completed: Boolean
});
const todoModel = mongoose_1.default.model('Todo', todoSchema);
exports.default = todoModel;

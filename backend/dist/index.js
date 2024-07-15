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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const zodtypes_1 = require("./zodtypes");
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post('/todos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inputPayload = req.body;
    const parsedPayload = zodtypes_1.inputTodo.safeParse(inputPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            message: "Invalid inputs"
        });
        return;
    }
    try {
        yield db_1.default.create({
            title: inputPayload.title,
            description: inputPayload.description,
            completed: false
        });
        res.json({
            message: "Todo created"
        });
    }
    catch (e) {
        res.status(411).json({
            message: "Error while creating"
        });
    }
}));
app.get('/todos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield db_1.default.find();
        res.json({
            todos
        });
    }
    catch (e) {
        console.log(e);
        res.status(404).json({
            message: "Error while fetching"
        });
    }
}));
app.put('/completed', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inputPayload = req.body;
    const parsedPayload = zodtypes_1.updateTodo.safeParse(inputPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            message: "Wrong inputs"
        });
        return;
    }
    try {
        yield db_1.default.updateOne({ _id: inputPayload.id }, { $set: { completed: true }
        });
        res.json({
            message: "Todo updated completed"
        });
    }
    catch (e) {
        return res.json({
            message: "Error while updating"
        });
    }
}));
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

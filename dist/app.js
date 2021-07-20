"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
// const express = require('express');
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// app.use("/todo", todoRoutes);
app.use('/todos', todos_1.default);
app.use((err, req, res, next) => {
    res.json({
        message: err.message,
    });
});
app.listen(3000);

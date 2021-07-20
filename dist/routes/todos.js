"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = express_1.Router();
router.post('/', todos_1.createTodo);
router.get('/', (req, res) => {
    res.json({
        msg: "ok"
    });
});
router.patch('/');
router.delete('/');
exports.default = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODO = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODO.push(newTodo);
    res.status(201).json({ message: "Created the todo", createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodo = (req, res, next) => {
    res.json({ todos: TODO });
};
exports.getTodo = getTodo;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updateText = req.body.text;
    //   const todoIndex = TODO.findIndex((todo) => todo);
    const todoIndex = TODO.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("Could not find todo!");
    }
    TODO[todoIndex] = new todo_1.Todo(TODO[todoIndex].id, updateText);
    res.json({ message: 'Updated!', updated: TODO });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODO.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("Could not find todo!");
    }
    TODO.splice(todoIndex, 1);
    res.json({ message: 'Deleted!' });
};
exports.deleteTodo = deleteTodo;

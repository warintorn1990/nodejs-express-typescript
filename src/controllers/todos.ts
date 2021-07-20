// import { Request, Response, NextFunction } from "express";
import { RequestHandler } from "express";
import { Todo } from "../models/todo";
const TODO: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODO.push(newTodo);

  res.status(201).json({ message: "Created the todo", createTodo: newTodo });
};

export const getTodo: RequestHandler = (req, res, next) => {
  res.json({ todos: TODO });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const updateText = (req.body as { text: string }).text;
//   const todoIndex = TODO.findIndex((todo) => todo);

  const todoIndex = TODO.findIndex(todo => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error("Could not find todo!");
  }

  TODO[todoIndex] = new Todo(TODO[todoIndex].id, updateText);

  res.json({message: 'Updated!', updated: TODO});
};

export const deleteTodo: RequestHandler = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODO.findIndex(todo => todo.id === todoId);

    if (todoIndex < 0) {
      throw new Error("Could not find todo!");
    }

    TODO.splice(todoIndex, 1);
    res.json({message: 'Deleted!'});
}
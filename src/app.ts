import express, { Request, Response, NextFunction } from "express";



import todoRoutes from "./routes/todos";

// const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.use("/todo", todoRoutes);
app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: err.message,
  });
});

app.listen(3000);
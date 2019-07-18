import { Application, Request, Response } from "express";
const path = require("path");
const express = require("express");

export const app: Application = express();

app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.get("/", (_: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "views", "index.html"));
});

app.get("/lib", (_: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "views", "lib.html"));
});

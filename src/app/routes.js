const express = require("express");

const routes = express.Router();
const TaskController = require("./controller/TaskController");

routes.get("/tasks", TaskController.list);

routes.get("/tasks/:id", TaskController.get);

routes.post("/tasks", TaskController.store);

routes.delete("/tasks/:id", TaskController.delete);

routes.put("/tasks/:id", TaskController.put);

routes.get("/tasks/search", TaskController.search);

module.exports = routes;

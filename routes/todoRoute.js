const {
  addTask,
  deleteTaskbyId,
  deleteAllTask,
  updateTask,
} = require("../controller/todoController");

const router = require("express").Router();

router.post("/task", addTask);
router.patch("/task/:id", updateTask);
router.delete("/task/:id", deleteTaskbyId);
router.delete("/task", deleteAllTask);

module.exports = { router };

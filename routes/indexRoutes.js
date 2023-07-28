const express = require("express");
const Todo = require("../model/Todo");
const { checkForAuthentication } = require("../middlewares/auth");

const router = express.Router();

router.get("/", checkForAuthentication, async (req, res) => {
  const tasks = await Todo.find({ createdBy: req.user._id });
  console.log(tasks);
  res.status(200).render("home", { tasks: tasks });
});

router.get("/signup", (req, res) => {
  res.status(200).render("signup");
});

router.get("/login", (req, res) => {
  res.status(200).render("login");
});

module.exports = { router };

const Todo = require("../model/Todo");

const addTask = async (req, res) => {
  const { todo } = req.body;
  await Todo.create({ todo: todo, createdBy: req.user._id });
  res.redirect("/");
};
const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const { newTask } = req.body;
  try {
    const result = await Todo.findByIdAndUpdate(taskId, { todo: newTask });
    res.redirect("/");
  } catch (error) {
    console.log(`error at updateTaskById  ERROR=> ${error}`);
  }
};
const deleteTaskbyId = async (req, res) => {
  const { _id } = req.params;
  await Todo.deleteOne({ id: _id });
  res.status(201).redirect("/");
};
const deleteAllTask = async (req, res) => {
  await Todo.deleteMany({});
  res.status(201).redirect("/");
};

module.exports = {
  addTask,
  deleteTaskbyId,
  deleteAllTask,
  updateTask,
};

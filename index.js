const PORT = 5000;

const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");

const homeRouter = require("./routes/indexRoutes");
const todoRouter = require("./routes/todoRoute");
const userRouter = require("./routes/userRoutes");
const { checkForAuthentication } = require("./middlewares/auth");

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/TodoApp");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(cookieParser());
app.set("view engine", "ejs");

app.use("/", homeRouter.router);
app.use("/todo", checkForAuthentication, todoRouter.router);
app.use("/", userRouter.router);

app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
});

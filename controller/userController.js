const bcrypt = require("bcrypt");
const User = require("../model/user");
const { createToken } = require("../services/auth");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user == null) return res.status(400).redirect("/signup");
  if (await bcrypt.compare(password, user.password)) {
    const token = createToken(user);
    res.cookie("token", token);
    res.status(200).redirect("/");
  } else {
    res.status(400).redirect("/login");
  }
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const reqUser = await User.findOne({ email });
  if (reqUser) return res.status(400).send({ message: "user already exist" });
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log("user created successfully" + newUser);
  res.status(201).redirect("/");
};

module.exports = { loginUser, registerUser };

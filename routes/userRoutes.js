const { loginUser, registerUser } = require("../controller/userController");

const router = require("express").Router();

router.post("/login", loginUser);
router.post("/signup", registerUser);

module.exports = { router };

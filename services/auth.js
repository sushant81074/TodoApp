const jwt = require("jsonwebtoken");
const sercrtKey = "asdfghjkl;";

const createToken = (user) => {
  const payload = {
    _id: user._id,
    email: user.email,
  };
  const token = jwt.sign(payload, sercrtKey);
  return token;
};

const validateToken = (token) => {
  const payload = jwt.verify(token, sercrtKey);
  return payload;
};

module.exports = { createToken, validateToken };

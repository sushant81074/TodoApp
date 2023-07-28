const { validateToken } = require("../services/auth");

// const checkForAuthentication = (req, res, next) => {
//   const token = req.cookies?.token;
//   console.log("checkForAuthentication  : " + token);
//   if (!token) return res.status(400).redirect("/login");
//   const user = validateToken(token);
//   req.user = user.next();
// };

// module.exports = { checkForAuthentication };

const checkForAuthentication = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) return res.status(400).redirect("/login");

  try {
    const user = validateToken(token);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).redirect("/login");
  }
};

module.exports = { checkForAuthentication };

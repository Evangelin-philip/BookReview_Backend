require("dotenv").config();
const jwt = require("jsonwebtoken");

const jwtMiddleware = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];

  try {
    const jwtResponse = jwt.verify(token, process.env.SECRET_KEY);

    req.payload = {
      userMail: jwtResponse.userMail,
      userName: jwtResponse.userName,
    };
    next();
  } catch (error) {


    res.status(401).json("Invalid Token");
  }
};
module.exports = jwtMiddleware;

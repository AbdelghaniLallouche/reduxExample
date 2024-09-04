const Jwt = require("jsonwebtoken");

const generateAuthToken = (user) => {
  const token = Jwt.sign(
    { _id: user._id, name: user.name, email: user.email },
    "ghani123"
  );
  return token;
};

module.exports = generateAuthToken;

// jwt middle ware for verification
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {

  const bearerHeader = req.headers["authorization"]
  if (typeof bearerHeader !== "undefined") {
    // - pull the token out of the header
    const token = bearerHeader.split(" ")[1]
    // - use the token and the verify method to verify an authenticated user
    jwt.verify(token, "blingbling", function (err, payload) {
      if (err) return res.sendStatus(500).json({ message: "Invalid Token" })
      
      req.userId = payload._id; // use the user ID within routes/controller functions
      // - on success, call next()
      next()
    })
  } else {
    res.sendStatus(403);
  }
};

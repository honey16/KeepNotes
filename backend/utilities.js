const jwt = require("jsonwebtoken")

// function authenticateToken(req,res,next) {
//   const authHeader = req.headers["authorization"]
//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) return res.sendStatus(401);

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(401);
//     req.user = user;
//     next();
//   })
// }


function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    console.log("No token provided");
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log("Token verification failed");
      return res.sendStatus(401);
    }
    req.user = user;
    console.log("Authenticated User:", req.user); // Log user information
    next();
  });
}


module.exports = {
  authenticateToken,
}
//12739
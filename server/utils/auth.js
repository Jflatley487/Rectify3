const jwt = require("jsonwebtoken"); // Import 'jsonwebtoken' library
// Define the secret key and expiration time
const secret = "mysecretssshhhhhhh";
const expiration = "2h";
// Export an object containing two functions: 'authMiddleware' and 'signToken'
module.exports = {
  authMiddleware: function ({ req, res, next }) {
    let token = extractTokenFromRequest(req);
    if (!token) {
      return next();
    }

    console.log("Received token: ", token);

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log("Decoded token: ", data); 
      req.user = data;
    } catch {
      console.log("Invalid token", error.message);
      return res.status(401).json({ error: "invalid token!" });
    }
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

function extractTokenFromRequest(req) {
  let token = req.body.token || req.query.token;

  if (!token && req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.substring(7);
  }

  return token;
}
const jwt = require("jsonwebtoken"); // Import 'jsonwebtoken' library
// Define the secret key and expiration time
const secret = "mysecretssshhhhhhh";
const expiration = "2h";
// Export an object containing two functions: 'authMiddleware' and 'signToken'
module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
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
      console.log("Invalid token");
    }
    return req;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
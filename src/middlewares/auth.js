const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token;

  // Check if the Authorization header contains a Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(403).json({
      message: "Unauthorized access to this route. Token is required.",
    });
  }

  try {
    // Decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch the user based on the decoded token's ID
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: `No user found with the ID: ${decoded.id}`,
      });
    }

    // Attach the user object to the request
    req.user = user;
    next();
  } catch (err) {
    // Handle invalid or expired tokens
    res.status(403).json({
      message: "Invalid or expired token. Unauthorized access.",
    });
  }
};

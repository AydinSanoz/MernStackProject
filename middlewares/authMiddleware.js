const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next)=>{

    // get token
    const token = req.header("token")
    // Return error if token doesn't exist
    if(!token){
        return res.status(401).json({message : "No token"})
    }
    // Verify Token
    jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, decodedToken) => {
        console.log("decodedToken", decodedToken);
        if (err) {
          return res.status(401).json({ msg: "Invalid Token" });
        } else {
          req.decodedUser = decodedToken.user;
          next();
        }
      });
    
}

module.exports = authMiddleware
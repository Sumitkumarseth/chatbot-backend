const jwt = require("jsonwebtoken")

module.exports = (req,res,next)=>{
 const token = req.headers.authorization?.split(" ")[1]
 if(!token) return res.status(401).json("No token")

 const data = jwt.verify(token,process.env.JWT_SECRET)
 req.userId = data.id
 next()
}

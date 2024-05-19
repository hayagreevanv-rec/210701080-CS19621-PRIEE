const jwt = require('jsonwebtoken');

const isLoggedIn =(req,res,next) =>{
    const token = req.cookies.jwt;
    if(token){
        const payload = jwt.verify(token, process.env.ACCESS_TOKEN);
        if(payload) {
            req.user = payload; 
            next();
        } else {
            res.status(498).json({ error: "token verification failed" });
        }
    }else{
        res.status(401).json({ error: "Authorization header malformed" });
    }
}
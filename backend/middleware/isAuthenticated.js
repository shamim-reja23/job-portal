import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    
    try {
        const token = req.cookies.token
        if(!token){
            return res.status(401).json({
                success: false,
                message: "User not authenticated"
            })
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        // if(!decode){
        //     return res.status(401).json({
        //         success: false,
        //         message: "Invalid token"
        //     })
        // }

        req.user = decoded;
        next();
        
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        })
    }
}

export default isAuthenticated;
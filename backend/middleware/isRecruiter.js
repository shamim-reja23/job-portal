const isRecruiter = (req, res, next) => {
    try {

        if(!req.user || req.user.role !== "recruiter"){
            return res.status(403).json({
                success: false,
                message: "Access denied. Recruiters Only."
            })
        }

        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}


export default isRecruiter;
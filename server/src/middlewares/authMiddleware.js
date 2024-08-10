import User from "../models/User.js";

const authMiddleware = async (req, res, next) => {
    const { email, password } = req.query;
    const user = await User.findOne({where: {email: email, password: password}});

    if(user){
        req.user = user;
        next();
    }else{
        res.status(401).send("Invalid user");
    }
};

export default authMiddleware;
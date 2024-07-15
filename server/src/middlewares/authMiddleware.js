import User from "../models/User";

const authMiddleware = async (req, res, next) => {
    const { name, password } = req.query;
    const user = await User.findOne({where: {name: name, password: password}});

    if(user){
        req.user = user;
        next();
    }else{
        res.status(401).send("Invalid user");
    }
};

export default authMiddleware;
import User from "../models/User.js";
import bcrypt from "bcrypt";

const authMiddleware = async (req, res, next) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({where: {email: email}});

    if(!user){
        return res.status(401).json({error: "Invalid user"});
    }

    const isSamePAssword = bcrypt.compareSync(password, user.password);

    if(isSamePAssword){
        req.user = user;
        next();
    }else{
        res.status(401).send("Invalid user");
    }
};

export default authMiddleware;
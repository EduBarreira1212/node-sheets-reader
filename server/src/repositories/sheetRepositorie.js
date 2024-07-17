import User from "../models/User.js";

export const createNewUser = async (pk, user) => {
    const userCreated = await User.findByPk(pk);
    if (!userCreated) {
        const newUser = await User.create(user);
        console.log("New user:", newUser.toJSON());
        return newUser.toJSON();
    }
    return userCreated.toJSON();
};
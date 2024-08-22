import axios from "axios";

interface IuserInfo {
    email: string
    password: string
}

const getUser = async (userInfo: IuserInfo) => {
    try {
        const response = await axios.post(`https://node-sheets-reader.onrender.com/api/get-data`, {
            email: userInfo.email,
            password: userInfo.password
        });
        return response.data;
    } catch (error) {
        throw new Error("Error");
    }
}

export default getUser;
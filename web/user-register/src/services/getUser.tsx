import axios from "axios";

interface IuserInfo {
    email: string
    password: string
}

const getUser = async (userInfo: IuserInfo) => {
    try {
        const response = await axios.get(`https://node-sheets-reader.onrender.com/api/get-data?email=${userInfo.email}&password=${userInfo.password}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data", error)
    }
}

export default getUser;
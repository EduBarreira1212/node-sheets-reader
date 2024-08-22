import axios from "axios"

interface IuserForm {
    name: string
    email: string
    password: string
    phone: string
    CEP: string
}

const createUser = async (userForm: IuserForm) => {
    try {
        const response = await axios.post("https://node-sheets-reader.onrender.com/api/update-sheet", userForm);
        return response.data;
    } catch (error) {
        throw new Error();
    }
}

export default createUser;
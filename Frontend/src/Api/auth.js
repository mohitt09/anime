import axios from "axios";
const backendURL = `http://localhost:3000/api`;


export const registerUser = async ({ name, email, number, password }) => {
    try {
        const reqUrl = `${backendURL}/register`;
        const reqPayload = { name, email, number, password };
        const response = await axios.post(reqUrl, reqPayload);
        console.log(response);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 409) {
           
            console.log("User already exists. Please use a different email or login instead.");
            return null; 
        } else {
           
            console.error("An error occurred while registering the user:", error);
            throw error;
        }
    }
};

export const  loginUser = async ({email, password}) => {
    try {
        
        const reqUrl =`${backendURL}/login`;
        const reqPayload ={email, password};
        const response = await axios.post(reqUrl,reqPayload)
        console.log(response)
        return response.data;
        
    } catch (error) {
        console.log(error)
    }
};
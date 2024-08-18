import axios from "axios"

const axiosInstance = axios.create({
    // baseURL: "http://127.0.0.1:5001/clone-c3324/us-central1/api",
    baseURL: "https://amazon-backend-deploy-main.onrender.com/",
    
})

export {axiosInstance}
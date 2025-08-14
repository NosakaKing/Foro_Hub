import axios, { CreateAxiosDefaults } from "axios";
import { baseURL } from "@/config/global";

const config: CreateAxiosDefaults = {
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true
}

const apiClient = axios.create({    
    baseURL,
    ...config
})


export default apiClient;

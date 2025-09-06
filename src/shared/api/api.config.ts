import axios from "axios"
import { getToken } from "../utils/getToken";

const baseURL = import.meta.env.VITE_BASE_URL ?? "http://79.133.183.218:8880/api/v1";
export const request = axios.create({
    baseURL
});


request.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers['token'] = token;
    }
    return config
})

// request.interceptors.response.use((request)=>{

// }, (error) =>{

// })

export const apiUrl = {
    login: "/auth/log-in",
    getMe: "/user/me",
    ping: "/ping",
    products: "/product/all"
}
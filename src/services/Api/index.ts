import axios from "axios";
import { LS_TOKEN } from "@services/LocalStorage";

const api = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true,
    headers: {
        Authorization: `Bearer ${localStorage.getItem(LS_TOKEN)}`,
    }
});

export default api;
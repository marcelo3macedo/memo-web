import axios from "axios";
import { LS_TOKEN } from "@services/LocalStorage";

const api = axios.create({
    baseURL: "http://memo.professorantenada.com.br:3333",
    withCredentials: true,
    headers: {
        Authorization: `Bearer ${localStorage.getItem(LS_TOKEN)}`,
    }
});

export default api;
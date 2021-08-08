import axios from "axios";
import { LS_TOKEN } from "@services/LocalStorage";

const api = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
        Authorization: `Bearer ${localStorage.getItem(LS_TOKEN)}`,
    }
});

export default api;
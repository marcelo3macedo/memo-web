import { call } from "redux-saga/effects";

import api from ".";
import { LS_REFRESHTOKEN, LS_TOKEN } from "@services/LocalStorage";

export function* retrieve(method) {
    return yield call(api.get, method);
}

export function* send(method, data=null) {
    try {
        const response = yield call(api.post, method, data);
        
        return {
            status: response.status,
            data: response.data
        };
    } catch (e) {
        console.log(e.response.data);        
        return {
            status: 401,
            data: e.response.data
        };
    }    
}
export function authenticate({ token, refreshToken }) {
    localStorage.setItem(LS_TOKEN, token);
    localStorage.setItem(LS_REFRESHTOKEN, refreshToken);
    api.defaults.headers.common = {'Authorization': `bearer ${token}`}
}
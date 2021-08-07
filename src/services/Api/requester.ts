import api from ".";
import { call } from "redux-saga/effects";

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
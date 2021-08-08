import { call, put } from "redux-saga/effects";

import api from ".";
import { LS_REFRESHTOKEN, LS_TOKEN } from "@services/LocalStorage";
import { checkAuthAction } from "@store/modules/auth/actions";

export function* retrieve(method, force=false) {
    try {
        return yield call(api.get, method);
    } catch (e) {
        if (e.response && e.response.status === 401 && !force) {
            yield put(checkAuthAction(true));
            yield retrieve(method, true);
        }

        return {
            status: 401,
            data: e.response ?? e.response.data
        };
    }
}

export function* send(method, data=null) {
    try {
        const response = yield call(api.post, method, data);
        
        return {
            status: response.status,
            data: response.data
        };
    } catch (e) {
        return {
            status: 401,
            data: e.response ?? e.response.data
        };
    }    
}
export function authenticate({ token, refreshToken }) {
    localStorage.setItem(LS_TOKEN, token);
    localStorage.setItem(LS_REFRESHTOKEN, refreshToken);
}
import { call, put } from "redux-saga/effects";

import api from ".";
import { LS_REFRESHTOKEN, LS_TOKEN } from "@services/LocalStorage";
import { verifyToken } from "./validation";
import { navigatePush } from "@store/mods/navigate/actions";
import { PATH_SIGN_IN } from "@services/Navigation";

export function* request({ type, method, data=null }) {
    const action = getByType(type)
    if (!action) return

    try {
        yield verifyToken()
        return yield call(action, method, data);
    } catch (e) {
        if (e?.response?.status === 401) {
            yield put(navigatePush({ path: PATH_SIGN_IN }))
        }
        
        return {
            status: e?.response?.status,
            data: e?.response?.data
        };
    }    
}

export function getByType(type) {
    return api[type]
}

export function* authenticate({ token, refreshToken }) {
    yield localStorage.setItem(LS_TOKEN, token);
    yield localStorage.setItem(LS_REFRESHTOKEN, refreshToken);
    api.defaults.headers.Authorization = `Bearer ${token}`;
}
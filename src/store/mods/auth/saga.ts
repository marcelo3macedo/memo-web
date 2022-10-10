import * as selectors from './selectors';
import { createBrowserHistory } from "history";
import { REQUESTER_POST } from "@constants/Requester";
import { authenticate, request } from "@services/Api/requester";
import { API_ACTIVATE, API_SESSION, API_USERS } from "@services/Api/routes";
import { renewToken } from "@services/Api/validation";
import { parseToken } from "@services/Authentication";
import { PATH_EMAIL_VALIDATION, PATH_HOME, PATH_MAIN, PATH_SIGN_IN } from "@services/Navigation";
import { all, put, select, takeLatest } from "redux-saga/effects";
import { navigatePush } from "../navigate/actions";
import { redirectAction, setRedirectUrlAction } from "../redirect/actions";
import { activateFailed, activateSuccess, signInFailureAction, signInSuccessAction } from "./actions";

function* signIn({ payload }:any) {
    const response = yield request({ 
        type: REQUESTER_POST,
        method: API_SESSION, 
        data: {
            email: payload.user,
            password: payload.password
        } 
    });

    if (response.status !== 200) {
        yield put(signInFailureAction({ type: 'auth.invalidAuth' }));
        return;
    }

    const { token, refreshToken } = response.data;
    const { sub, email, name } = parseToken(token);
    const user = {
        id: sub,
        email,
        name
    }
    
    yield authenticate({ token, refreshToken});
    yield put(signInSuccessAction({ user }));
}

function* signInSuccess() {
    yield put(redirectAction())
}

function* signOut() {
    localStorage.clear()
    yield put(navigatePush({ path: PATH_HOME }))
}

function* signUp({ payload }:any) {
    const response = yield request({ 
        type: REQUESTER_POST,
        method: API_USERS, 
        data: {
            name: payload.fullName,
            email: payload.user,
            password: payload.password
        }
    })

    if (response.status !== 201) {
        return
    }

    yield put(navigatePush({ path: PATH_EMAIL_VALIDATION }))
}

function* refreshToken({ payload }:any) {
    const { refreshToken } = payload || {}
    const newToken = renewToken({ refreshToken })
    
    if (!newToken) {
        yield put(navigatePush({ path: PATH_SIGN_IN }));
        return;
    }

    const { sub, email, name } = parseToken(newToken);
    const user = {
        id: sub,
        email,
        name
    }

    yield authenticate({ token: newToken, refreshToken });
    yield put(signInSuccessAction({ user }));
}

function* verify() {
    const signed = yield select(selectors.signed)
    const history = createBrowserHistory()
    
    if (signed) {
        return true;
    }

    yield put(setRedirectUrlAction({ url: history.location.pathname }))        
    yield put(navigatePush({ path: PATH_SIGN_IN }));
}

function* activate({ payload }:any) {
    if (!payload.token) {
        return
    }

    const response = yield request({ 
        type: REQUESTER_POST, 
        method: API_ACTIVATE, 
        data: {
            token: payload.token
        }
    });

    if (response.status !== 200) {
        yield put(activateFailed());
        return
    }
    
    const { token, refreshToken } = response.data;
    const { sub, email, name } = parseToken(token);
    const user = {
        id: sub,
        email,
        name
    }
    
    yield authenticate({ token, refreshToken});
    yield put(signInSuccessAction({ user }));
    yield put(activateSuccess());
}

function* activated() {
    yield put(navigatePush({ path: PATH_MAIN }));
}

function forgotPassword({ payload }:any) {
}

export default all([
    takeLatest('@auth/SIGN_IN', signIn),
    takeLatest('@auth/SIGN_IN_SUCCESS', signInSuccess),
    takeLatest('@auth/SIGN_UP', signUp),
    takeLatest('@auth/SIGN_OUT', signOut),
    takeLatest('@auth/REFRESH_TOKEN', refreshToken),
    takeLatest('@auth/VERIFY', verify),
    takeLatest('@auth/ACTIVATE', activate),
    takeLatest('@auth/ACTIVATE_SUCCESS', activated),
    takeLatest('@auth/FORGOT_PASSWORD', forgotPassword),
]);
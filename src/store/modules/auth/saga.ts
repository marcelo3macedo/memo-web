
import { all, takeLatest, put, select } from "redux-saga/effects";
import { authenticate, send } from "@services/Api/requester";
import { API_ACTIVATE, API_REFRESHTOKEN, API_SESSION, API_USERS } from "@services/Api/routes";
import { navigatePush } from "@store/modules/navigate/actions";
import { PATH_EMAIL_VALIDATION, PATH_HOME, PATH_MAIN, PATH_SIGN_IN } from "@services/Navigation";
import { loadActivateFailed, refreshTokenAction, serverFailureAction, signInFailureAction, signInSuccessAction } from "./actions";
import { LS_REFRESHTOKEN } from "@services/LocalStorage";
import * as selectors from './selectors';

function* signIn({ payload }:any) {
    const response = yield send({ 
        method: API_SESSION, 
        data: {
            email: payload.user,
            password: payload.password
        } 
    });
    
    if (response.status === 401) {
        yield put(signInFailureAction({ type: 'auth.invalidAuth' }));
        return;
    }

    if (response.status !== 200) {
        yield put(serverFailureAction());
        return;
    }

    const { token, refreshToken, user } = response.data;
    const { name, email } = user;

    yield authenticate({ token, refreshToken});
    yield put(signInSuccessAction({ name, email }));
    yield put(navigatePush({ path: PATH_MAIN }));
}

function* signUp({ payload }:any) {
    yield send({ method: API_USERS, data: {
        name: payload.fullName,
        email: payload.user,
        password: payload.password
    }});

    yield put(navigatePush({ path: PATH_EMAIL_VALIDATION }));
}

function forgotPassword({ payload }:any) {
}

function* logout() {
    localStorage.clear();
    
    yield put(navigatePush({ path: PATH_HOME }));
}

function* checkAuth({ payload }:any) {
    const signed = yield select(selectors.signed);
    
    if (signed && !payload.force) {
        return true;
    }

    const refreshToken = localStorage.getItem(LS_REFRESHTOKEN);
    if (refreshToken) {
        yield put(refreshTokenAction({ refreshToken }));
        return;
    }
    
    yield put(navigatePush({ path: PATH_SIGN_IN }));
    return;
}

function* refreshToken({ payload }:any) {
    const response = yield send({ method: API_REFRESHTOKEN, data: {
        token: payload.refreshToken
    }});

    if (response.status !== 200) {
        yield put(navigatePush({ path: PATH_SIGN_IN }));
        return;
    }

    const { token, refreshToken, user } = response.data;
    const { name, email } = user;

    yield authenticate({ token, refreshToken});

    yield put(signInSuccessAction({ name, email }));
}

function* activate({ payload }:any) {
    if (!payload.token) {
        return
    }

    const response = yield send({ method: API_ACTIVATE, data: {
        token: payload.token
    }});

    if (response.status !== 200) {
        yield put(loadActivateFailed());
        return
    }

    const { token, refreshToken, user } = response.data;
    const { name, email } = user;

    yield authenticate({ token, refreshToken});
    yield put(signInSuccessAction({ name, email }));
    yield put(navigatePush({ path: PATH_MAIN }));
}

export default all([
    takeLatest('@auth/SIGN_IN', signIn),
    takeLatest('@auth/SIGN_UP', signUp),
    takeLatest('@auth/LOGOUT', logout),
    takeLatest('@auth/FORGOT_PASSWORD', forgotPassword),
    takeLatest('@auth/CHECK_AUTH', checkAuth),
    takeLatest('@auth/REFRESH_TOKEN', refreshToken),
    takeLatest('@auth/LOAD_ACTIVATE', activate)
]);
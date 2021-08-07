
import { all, takeLatest, put } from "redux-saga/effects";
import { send } from "@services/Api/requester";
import { API_SESSION, API_USERS } from "@services/Api/routes";
import { LS_REFRESHTOKEN, LS_TOKEN } from "@services/LocalStorage";
import { navigatePush } from "@store/modules/navigate/actions";
import { PATH_HOME, PATH_SIGN_IN } from "@services/Navigation";
import { signInAction, signInSuccessAction } from "./actions";

function* signIn({ payload }:any) {
    const response = yield send(API_SESSION, {
        email: payload.user,
        password: payload.password
    });

    if (response.status !== 200) {
        return;
    }

    const { token, refreshToken, user } = response.data;
    const { name, email } = user;

    localStorage.setItem(LS_TOKEN, token);
    localStorage.setItem(LS_REFRESHTOKEN, refreshToken);
    
    yield put(signInSuccessAction({ name, email }));
    yield put(navigatePush({ path: PATH_HOME }));
}

function* signUp({ payload }:any) {
    const response = yield send(API_USERS, {
        name: payload.fullName,
        email: payload.user,
        password: payload.password
    });

    if (response.status !== 201) {
        return;
    }

    yield put(signInAction({ user: payload.user, password: payload.password }));
}

function forgotPassword({ payload }:any) {
}

function* logout() {
    yield put(navigatePush({ path: PATH_SIGN_IN }));
}

export default all([
    takeLatest('@auth/SIGN_IN', signIn),
    takeLatest('@auth/SIGN_UP', signUp),
    takeLatest('@auth/LOGOUT', logout),
    takeLatest('@auth/FORGOT_PASSWORD', forgotPassword),
]);
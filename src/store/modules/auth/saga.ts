
import { all, takeLatest, put } from "redux-saga/effects";
import { send } from "@services/Api/requester";
import { API_SESSION } from "@services/Api/routes";
import { LS_REFRESHTOKEN, LS_TOKEN } from "@services/LocalStorage";
import { navigatePush } from "@store/modules/navigate/actions";
import { PATH_HOME } from "@services/Navigation";

function* signIn({ payload }:any) {
    const response = yield send(API_SESSION, {
        email: payload.user,
        password: payload.password
    });

    if (response !== 200) {
        return;
    }

    const { token, refreshToken } = response.data;

    localStorage.setItem(LS_TOKEN, token);
    localStorage.setItem(LS_REFRESHTOKEN, refreshToken);

    //yield put(navigatePush({ path: PATH_HOME }));
}

function signUp({ payload }:any) {
}

function forgotPassword({ payload }:any) {
}

export default all([
    takeLatest('@auth/SIGN_IN', signIn),
    takeLatest('@auth/SIGN_UP', signUp),
    takeLatest('@auth/FORGOT_PASSWORD', forgotPassword),
]);
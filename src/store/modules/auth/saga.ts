
import { all, takeLatest } from "redux-saga/effects";

function signIn({ payload }:any) {    
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
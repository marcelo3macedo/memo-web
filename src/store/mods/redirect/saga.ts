import { all, put, select, takeLatest } from "redux-saga/effects";
import { redirectActionSuccess } from "./actions";
import * as selectors from './selectors';
import { navigatePush } from "../navigate/actions";
import { PATH_MAIN } from "@services/Navigation";

function* redirect() {
    const redirectTo = yield select(selectors.url);
    const path = redirectTo ? redirectTo : PATH_MAIN
    yield put(navigatePush({ path }))
    yield put(redirectActionSuccess())
}

export default all([
    takeLatest('@redirect/REDIRECT', redirect),
]);
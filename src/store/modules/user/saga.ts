
import { REQUESTER_GET } from "@constants/Requester";
import { request } from "@services/Api/requester";
import { API_REVIEW } from "@services/Api/routes";
import { all, put, takeLatest } from "redux-saga/effects";
import { loadFailedAction, loadSuccessAction } from "./actions";

function* load() {
    const response = yield request({ type: REQUESTER_GET, method: API_REVIEW });
    
    if (response.status !== 200 || !response.data) {
        return yield put(loadFailedAction());
    }

    const { lastSession, sessions, featuredDecks } = response.data;
    yield put(loadSuccessAction({ lastSession, sessions, featuredDecks }));
}

export default all([
    takeLatest('@user/LOAD', load),
]);
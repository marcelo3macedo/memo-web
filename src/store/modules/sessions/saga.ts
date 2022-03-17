
import { retrieve } from "@services/Api/requester";
import { API_DECKS, API_SESSIONS } from "@services/Api/routes";
import { all, put, takeLatest } from "redux-saga/effects";
import { indexFailedAction, indexSuccessAction, loadFailedAction, loadSuccessAction } from "./actions";

function* load() {
    const response = yield retrieve({ method: API_DECKS });
    
    if (response.status !== 200 || !response.data) {
        return yield put(loadFailedAction());
    }

    yield put(loadSuccessAction({ sessions: response.data }));
}

function* index({ payload }:any) {
    const { id } = payload;
    const response = yield retrieve({ method: `${API_SESSIONS}/${id}` });
    
    if (response.status !== 200 || !response.data) {
        return yield put(indexFailedAction());
    }

    yield put(indexSuccessAction({ session: response.data }));
}

export default all([
    takeLatest('@sessions/LOAD', load),
    takeLatest('@sessions/INDEX', index),
]);
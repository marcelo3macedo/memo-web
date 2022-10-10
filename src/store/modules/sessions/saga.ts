
import { REQUESTER_GET } from "@constants/Requester";
import { request } from "@services/Api/requester";
import { API_DECKS, API_SESSIONS } from "@services/Api/routes";
import { all, put, takeLatest } from "redux-saga/effects";
import { indexFailedAction, indexSuccessAction, loadFailedAction, loadSuccessAction } from "./actions";

function* load({ payload }:any) {
    const { search } = payload || {}
    const method = getMethod(search)
    const response = yield request({ type: REQUESTER_GET, method });
    
    if (response.status !== 200 || !response.data) {
        return yield put(loadFailedAction());
    }

    yield put(loadSuccessAction({ sessions: response.data }));
}

function* index({ payload }:any) {
    const { id } = payload;
    const response = yield request({ type: REQUESTER_GET, method: `${API_SESSIONS}/${id}` });
    
    if (response.status !== 200 || !response.data) {
        return yield put(indexFailedAction());
    }

    yield put(indexSuccessAction({ session: response.data }));
}

function* search({ payload }:any) {
    const { term } = payload;
    const response = yield request({ type: REQUESTER_GET, method: `${API_DECKS}?name=${term}` });
    
    if (response.status !== 200 || !response.data) {
        return yield put(loadFailedAction());
    }

    yield put(loadSuccessAction({ sessions: response.data }));
}

function getMethod(search) {
    return search ? `${API_DECKS}?name=${search}` : API_DECKS
}

export default all([
    takeLatest('@sessions/LOAD', load),
    takeLatest('@sessions/INDEX', index),
    takeLatest('@sessions/SEARCH', search),
]);
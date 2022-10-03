import { all, put, takeLatest } from "redux-saga/effects";

import { loadIndexSuccess, loadListSuccessAction } from "./actions";
import { retrieve } from "@services/Api/requester";
import { API_DECKS, API_SESSION, API_SESSIONS } from "@services/Api/routes";
import { navigatePush } from "@store/mods/navigate/actions";

function* navigateTo({ payload }:any) {
    const { sessionId } = payload || {}
    const path = `${API_SESSION}/${sessionId}`
    
    yield put(navigatePush({ path }))
}

function* loadIndex({ payload }:any) {
    const { id } = payload;
    const response = yield retrieve({ method: `${API_SESSIONS}/${id}` });
    
    if (response.status !== 200 || !response.data) {
        return
    }

    yield put(loadIndexSuccess({ session: response.data }));
}

function* loadList({ payload }:any) {
    const { search } = payload || {}
    const method = getMethod(search)
    const response = yield retrieve({ method });
    
    if (response.status !== 200 || !response.data) {
        return
    }

    yield put(loadListSuccessAction({ sessions: response.data }));
}

function getMethod(search) {
    return search ? `${API_DECKS}?name=${search}` : API_DECKS
}

export default all([
    takeLatest('@sessions/NAVIGATE_TO', navigateTo),
    takeLatest('@sessions/LOAD_INDEX', loadIndex),
    takeLatest('@sessions/LOAD_LIST', loadList),
])
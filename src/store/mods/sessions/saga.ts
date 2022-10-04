import { all, put, select, takeLatest } from "redux-saga/effects";

import * as selectors from './selectors';
import { loadIndexSuccess, loadListSuccessAction, loadMoreListSuccessAction } from "./actions";
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
    const method = getMethod(search, 0)
    const response = yield retrieve({ method })

    if (response.status !== 200 || !response.data) {
        return
    }

    yield put(loadListSuccessAction({ data: response.data }));
}

function* loadMoreList({ payload }:any) {
    const { search } = payload || {}
    const actualPage = yield select(selectors.actualPage)
    const sessions = yield select(selectors.sessions)
    const nextPage = actualPage + 1
    const method = getMethod(search, nextPage)
    const response = yield retrieve({ method })
    
    if (response.status !== 200 || !response.data) {
        return
    }

    const data = sessions.concat(response.data.results)
    yield put(loadMoreListSuccessAction({ data, actualPage: nextPage }));
}

function* removeFromList({ payload }:any) {
    const { id } = payload || {}
    const sessions = yield select(selectors.sessions)
    const sessionList = Object.assign([], sessions)
    const result = sessionList.filter(i => {
        return i.id !== id
    })

    yield put(loadListSuccessAction({ data: { result } }));
}

function getMethod(search, nextPage) {
    return search ? `${API_DECKS}?name=${search}&page=` + nextPage : `${API_DECKS}?page=${nextPage}`
}

export default all([
    takeLatest('@sessions/NAVIGATE_TO', navigateTo),
    takeLatest('@sessions/LOAD_INDEX', loadIndex),
    takeLatest('@sessions/LOAD_LIST', loadList),
    takeLatest('@sessions/LOAD_MORE_LIST', loadMoreList),
    takeLatest('@sessions/REMOVE_FROM_LIST', removeFromList),
])
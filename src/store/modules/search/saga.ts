
import { all, put, takeLatest } from "redux-saga/effects";
import { retrieve } from "@services/Api/requester";
import { API_SEARCH } from "@services/Api/routes";
import { loadSuccessAction } from "./actions";

function* load() {
    const response = yield retrieve({ method: `${API_SEARCH}` });
    
    if (response.status !== 200) {
        return;
    }

    yield put(loadSuccessAction({ search: response.data }));
}

function* search(data) {
    const { term } = data.payload;
    const response = yield retrieve({ method: `${API_SEARCH}/${term}` });
    
    if (response.status !== 200) {
        return;
    }

    yield put(loadSuccessAction({ search: response.data }));
}

export default all([
    takeLatest('@search/LOAD', load),
    takeLatest('@search/SEARCH_ACTION', search),
]);
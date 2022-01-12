
import { all, put, select, takeLatest } from "redux-saga/effects";
import { retrieve } from "@services/Api/requester";
import { API_DECKS } from "@services/Api/routes";
import { loadSuccessAction } from "./actions";
import * as selectors from './selectors';

function* load() {
    const page = yield select(selectors.page);
    const params = "?isPublic=true&page=" + page;
    const response = yield retrieve({ method: `${API_DECKS}${params}` });

    if (response.status !== 200) {
        return;
    }

    yield put(loadSuccessAction({ data: response.data }));
}

export default all([
    takeLatest('@gallery/LOAD', load),
    takeLatest('@gallery/LOAD_MORE', load),
]);
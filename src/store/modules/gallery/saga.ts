
import { all, put, takeLatest } from "redux-saga/effects";
import { retrieve } from "@services/Api/requester";
import { API_DECKS } from "@services/Api/routes";
import { loadSuccessAction } from "./actions";

function* load() {
    const params = "?isPublic=true"
    const response = yield retrieve({ method: `${API_DECKS}${params}` });

    if (response.status !== 200) {
        return;
    }

    yield put(loadSuccessAction({ data: response.data }));
}

export default all([
    takeLatest('@gallery/LOAD', load),
]);
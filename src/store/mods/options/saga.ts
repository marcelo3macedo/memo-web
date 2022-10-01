
import { all, put, takeLatest } from "redux-saga/effects";

import { retrieve } from "@services/Api/requester";
import { API_DECKSOPTIONS } from "@services/Api/routes";
import { loadActionSuccess } from "./actions";

function* loadOptions() {
    const response = yield retrieve({ method: API_DECKSOPTIONS });

    if (response.status !== 200 || !response.data) {
        return;
    }

    const { frequencies } = response.data;
    yield put(loadActionSuccess({ frequencies }));
}

export default all([
    takeLatest('@options/LOAD', loadOptions),
])
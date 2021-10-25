
import { all, put, takeLatest } from "redux-saga/effects";
import { retrieve } from "@services/Api/requester";
import { API_HISTORY } from "@services/Api/routes";
import { loadHistorySuccess } from "./actions";

function* loadHistory() {
    const response = yield retrieve({ method: API_HISTORY });
    
    if (response.status !== 200) {
        return;
    }

    yield put(loadHistorySuccess({ data: response.data }));
}

export default all([
    takeLatest('@history/LOAD', loadHistory),
]);
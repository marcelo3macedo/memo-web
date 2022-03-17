
import { all, put, takeLatest } from "redux-saga/effects";
import { retrieve } from "@services/Api/requester";
import { API_SESSIONS } from "@services/Api/routes";
import { loadActionSuccess } from "./actions";

function* loadHistory() {
    const response = yield retrieve({ method: `${API_SESSIONS}?history=true` });
    
    if (response.status !== 200) {
        return;
    }

    yield put(loadActionSuccess({ sessions: response.data }));
}

export default all([
    takeLatest('@history/LOAD', loadHistory),
]);
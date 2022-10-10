
import { all, put, takeLatest } from "redux-saga/effects";
import { request } from "@services/Api/requester";
import { API_SESSIONS } from "@services/Api/routes";
import { loadActionSuccess } from "./actions";
import { REQUESTER_GET } from "@constants/Requester";

function* loadHistory() {
    const response = yield request({ type: REQUESTER_GET, method: `${API_SESSIONS}?history=true` });
    
    if (response.status !== 200) {
        return;
    }

    yield put(loadActionSuccess({ sessions: response.data }));
}

export default all([
    takeLatest('@history/LOAD', loadHistory),
]);
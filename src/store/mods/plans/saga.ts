import { REQUESTER_GET } from "@constants/Requester";
import { request } from "@services/Api/requester";
import { API_PLANS } from "@services/Api/routes";
import { all, put, takeLatest } from "redux-saga/effects";
import { loadSuccess } from "./actions";

function* load() {
    const response = yield request({ 
        type: REQUESTER_GET, 
        method: `${API_PLANS}` 
    })

    if (response.status !== 200) {
        return;
    }

    yield put(loadSuccess({ plans: response.data }))
}

export default all([
    takeLatest('@plans/LOAD', load),
])
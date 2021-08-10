
import { all, put, takeLatest } from "redux-saga/effects";
import { retrieve } from "@services/Api/requester";
import { API_RESUME } from "@services/Api/routes";
import { loadSuccessAction } from "./actions";

function* load() {
    const response = yield retrieve({ method: API_RESUME });
    
    if (response.status !== 200) {
        return;
    }

    yield put(loadSuccessAction({ data: response.data }));
}

export default all([
    takeLatest('@resume/LOAD', load),
]);

import { all, put, takeLatest } from "redux-saga/effects";
import { retrieve, update } from "@services/Api/requester";
import { API_PROFILE } from "@services/Api/routes";
import { formatDateField } from "@services/Format";
import { loadProfileSuccess } from "./actions";

function* loadProfile() {
    const response = yield retrieve({ method: API_PROFILE });
    
    if (response.status !== 200) {
        return;
    }

    const { id, name, email, createdAt } = response.data;
    const profile = {
        id,
        name,
        email,
        createdAt: formatDateField(createdAt)
    }

    yield put(loadProfileSuccess({ data: profile }));
}

function* updateProfile(data) {
    const response = yield update({ method: API_PROFILE, data: data.payload.data });
    
    if (response.status !== 200) {
        return;
    }
}

export default all([
    takeLatest('@profile/LOAD', loadProfile),
    takeLatest('@profile/UPDATE', updateProfile),
]);
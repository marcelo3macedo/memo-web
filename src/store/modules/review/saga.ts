
import { retrieve, update } from "@services/Api/requester";
import { API_DIFFICULTIES, API_SESSIONS } from "@services/Api/routes";
import { PATH_SESSION_COMPLETED } from "@services/Navigation";
import { all, put, select, takeLatest } from "redux-saga/effects";
import { navigatePush } from "../navigate/actions";
import { finishAction, finishFailure, finishSuccess, loadOptionsFailure, loadOptionsSuccess } from "./actions";
import * as selectors from './selectors';

function* loadOptions() {
    const response = yield retrieve({ method: API_DIFFICULTIES });
    
    if (response.status !== 200 || !response.data) {
        return yield put(loadOptionsFailure());
    }

    yield put(loadOptionsSuccess({ options: response.data }));
}
function* setOptions() {
    const { session, position, answered } = yield select(selectors.review);
    
    if (!session || !session.cards || position < session.cards.length) {
        return;
    }

    yield put(finishAction({ session, cards: answered }));
}
function* finish({ payload }:any) {
    const { cards, session } = payload || {};
    const response = yield update({ method: `${API_SESSIONS}/${session.id}`, data: {
        cards
    } });
    
    if (response.status !== 200) {
        return yield put(finishFailure());
    }

    yield put(finishSuccess());
}
function* finished() {
    yield put(navigatePush({ path: PATH_SESSION_COMPLETED }));
}

export default all([
    takeLatest('@review/LOAD_OPTIONS', loadOptions),
    takeLatest('@review/SET_OPTION', setOptions),
    takeLatest('@review/FINISH', finish),
    takeLatest('@review/FINISH_SUCCESS', finished)
]);
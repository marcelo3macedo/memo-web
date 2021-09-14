
import { all, put, takeLatest } from "redux-saga/effects";
import { navigatePush } from "@store/modules/navigate/actions";
import { PATH_EDITDECK, PATH_DECK } from '@services/Navigation';
import { send, retrieve } from "@services/Api/requester";
import { API_DECKS, API_SESSIONSFEED } from "@services/Api/routes";
import { openDeckSuccessAction  } from "@store/modules/session/actions";
import { openSuccessAction } from "./actions";

function* save({ name }:any) {
    const data = { name };
    const response = yield send({ method: `${API_DECKS}`, data});
    
    if (response.status !== 200) {
        return;
    }

    yield put(navigatePush({ path: PATH_EDITDECK }));    
}

function* open({ payload }:any) {
    const response = yield retrieve({ method: `${API_DECKS}/${payload.deck.id}` });
    
    if (response.status !== 200) {
        return;
    }

    yield put(openSuccessAction({ deck: response.data}));
}

function* openSuccess() {
    yield put(navigatePush({ path: PATH_DECK }));
}

function* review(data) {
    const { deck } = data.payload;

    const response = yield retrieve({ method: `${API_SESSIONSFEED}/${deck.id}` });

    if (response.status !== 200) {
        return;
    }

    yield put(openDeckSuccessAction({ session: response.data }));
}

export default all([
    takeLatest('@deck/SAVE', save),
    takeLatest('@deck/OPEN', open),
    takeLatest('@deck/OPEN_SUCCESS', openSuccess),
    takeLatest('@deck/REVIEW', review),
]);
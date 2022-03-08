
import { all, put, takeLatest } from "redux-saga/effects";
import { navigatePush } from "@store/modules/navigate/actions";
import { PATH_EDITDECK, PATH_DECK, PATH_ADDDECK } from '@services/Navigation';
import { send, retrieve, update } from "@services/Api/requester";
import { API_DECKS, API_SESSIONSFEED, API_DECKSCLONE, API_DECKSOPTIONS, API_DECKSPATH } from "@services/Api/routes";
import { openDeckSuccessAction } from "@store/modules/session/actions";
import { openSuccessAction, saveSuccessAction, reviewAction, newDeckSuccessAction, openPathFailure, openPathSuccess } from "./actions";
import { loadDeckAction } from "../personal/actions";

function* save({ payload }:any) {
    const response = yield send({ method: `${API_DECKS}`, data: payload });
    
    if (response.status !== 201) {
        return;
    }

    yield put(saveSuccessAction(response.data));
}

function* edit({ payload }:any) {
    const response = yield update({ method: `${API_DECKS}/${payload.id}`, data: payload });
    
    if (response.status !== 200) {
        return;
    }

    yield put(loadDeckAction())
}

function* saveSuccess() {
    yield put(navigatePush({ path: PATH_EDITDECK }));
}

function* open({ payload }:any) {
    const response = yield retrieve({ method: `${API_DECKS}/${payload.deck.id}` });
    
    if (response.status !== 200) {
        return;
    }

    yield put(openSuccessAction({ deck: response.data}));
}

function* openPublic({ payload }:any) {
    const response = yield retrieve({ method: `${API_DECKS}/${payload.deck.id}?isPublic=true` });
    
    if (response.status !== 200) {
        return;
    }

    yield put(openSuccessAction({ deck: response.data}));
}

function* openSuccess() {
    yield put(navigatePush({ path: PATH_DECK }));
}

function* add() {
    yield put(navigatePush({ path: PATH_ADDDECK }));
}

function* review(data) {
    const { deck } = data.payload;

    const response = yield retrieve({ method: `${API_SESSIONSFEED}/${deck.id}` });

    if (response.status !== 200) {
        return;
    }

    yield put(openDeckSuccessAction({ session: response.data }));
}

function* finish() {
    yield put(navigatePush({ path: PATH_DECK }));
}

function* clone(data) {
    const { deck } = data.payload;
    const response = yield retrieve({ method: `${API_DECKSCLONE}/${deck.id}` });

    if (response.status !== 201) {
        return;
    }

    yield put(reviewAction({ deck: response.data }));
}

function* newDeck() {
    const response = yield retrieve({ method: `${API_DECKSOPTIONS}` });

    if (response.status !== 200) {
        return;
    }

    const { frequencies, themes } = response.data

    yield put(newDeckSuccessAction({ frequencies, themes }));
}

function* openPath({ payload }:any) {
    const { path } = payload;
    const response = yield retrieve({ method: `${API_DECKSPATH}/${path}` });

    if (response.status !== 200) {
        yield put(openPathFailure())
        return;
    }    

    yield put(openPathSuccess({ deck: response.data }))
}

export default all([
    takeLatest('@deck/SAVE', save),
    takeLatest('@deck/EDIT', edit),
    takeLatest('@deck/SAVE_SUCCESS', saveSuccess),
    takeLatest('@deck/OPEN', open),
    takeLatest('@deck/OPEN_PUBLIC', openPublic),
    takeLatest('@deck/OPEN_SUCCESS', openSuccess),
    takeLatest('@deck/REVIEW', review),
    takeLatest('@deck/CLONE', clone),
    takeLatest('@deck/ADD', add),
    takeLatest('@deck/FINISH', finish),
    takeLatest('@deck/LOAD_NEWDECK', newDeck),
    takeLatest('@deck/OPEN_PATH', openPath),
]);
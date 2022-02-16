
import { all, put, takeLatest } from "redux-saga/effects";
import { remove, retrieve } from "@services/Api/requester";
import { API_DECKS, API_PERSONALDECKS } from "@services/Api/routes";
import { editSuccessAction, loadDecksAction, loadDecksSuccess } from "./actions";
import { navigatePush } from "../navigate/actions";
import { PATH_EDITDECK } from "@services/Navigation";

function* loadDecks() {
    const response = yield retrieve({ method: API_PERSONALDECKS });
    
    if (response.status !== 200) {
        return;
    }

    yield put(loadDecksSuccess({ decks: response.data }));
}

function* removeDeck({ payload }:any) {
    const { deck } = payload || {}
    const response = yield remove({ method: `${API_DECKS}/${deck.id}` });

    if (response.status !== 200) {
        return;
    }

    yield put(loadDecksAction())
}

function* edit({ payload }:any) {
    const response = yield retrieve({ method: `${API_DECKS}/${payload.deck.id}` });
    
    if (response.status !== 200) {
        return;
    }

    yield put(editSuccessAction({ deck: response.data}));
}

function* editSuccess() {
    yield put(navigatePush({ path: PATH_EDITDECK }));
}

export default all([
    takeLatest('@personal/LOAD_DECKS', loadDecks),
    takeLatest('@personal/REMOVE_DECK', removeDeck),
    takeLatest('@personal/EDIT', edit),
    takeLatest('@personal/EDIT_SUCCESS', editSuccess),
]);
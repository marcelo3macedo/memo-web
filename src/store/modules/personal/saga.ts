
import { all, put, select, takeLatest } from "redux-saga/effects";
import { API_DECKS } from "@services/Api/routes";
import { editSuccessAction, loadDecksAction, loadDecksSuccess, loadDeckSuccess } from "./actions";
import { navigatePush } from "../navigate/actions";
import { PATH_DECK, PATH_EDITSESSION } from "@services/Navigation";
import * as selectors from './selectors';
import { openModalAction } from "../card/actions";
import { REQUESTER_DELETE, REQUESTER_GET } from "@constants/Requester";
import { request } from "@services/Api/requester";

function* loadDecks() {
    const response = yield request({ type: REQUESTER_GET, method: `${API_DECKS}` });
    
    if (response.status !== 200) {
        return;
    }

    yield put(loadDecksSuccess({ decks: response.data }));
}

function* loadDeck() {
    const deck = yield select(selectors.deck);
    const response = yield request({ type: REQUESTER_GET, method: `${API_DECKS}/${deck.id}` });
    
    if (response.status !== 200) {
        return;
    }

    yield put(loadDeckSuccess({ deck: response.data }));
}

function* loadDeckSuccesAction() {
    yield put(openModalAction(''));
}

function* removeDeck({ payload }:any) {
    const { deck } = payload || {}
    const response = yield request({ type: REQUESTER_DELETE, method: `${API_DECKS}/${deck.id}` });

    if (response.status !== 200) {
        return;
    }

    yield put(loadDecksAction())
}

function* edit({ payload }:any) {
    const response = yield request({ type: REQUESTER_GET, method: `${API_DECKS}/${payload.deck.id}` });
    
    if (response.status !== 200) {
        return;
    }

    yield put(editSuccessAction({ deck: response.data}));
}

function* editSuccess() {
    yield put(navigatePush({ path: PATH_EDITSESSION }));
}

function* view({ payload }:any) {
    const { deck } = payload;
    
    yield put(navigatePush({ path: `${PATH_DECK}/${deck.path}/${deck.id}` }));
}

export default all([
    takeLatest('@personal/LOAD_DECKS', loadDecks),
    takeLatest('@personal/LOAD_DECK', loadDeck),
    takeLatest('@personal/LOAD_DECK_SUCCESS', loadDeckSuccesAction),
    takeLatest('@personal/REMOVE_DECK', removeDeck),
    takeLatest('@personal/EDIT', edit),
    takeLatest('@personal/EDIT_SUCCESS', editSuccess),
    takeLatest('@personal/VIEW', view),
]);
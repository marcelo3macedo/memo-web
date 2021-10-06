
import { all, put, takeLatest, select } from "redux-saga/effects";
import { send, update, remove } from "@services/Api/requester";
import * as selectors from './selectors';
import { API_CARDS } from "@services/Api/routes";
import { addCard, updateCard, deleteCard } from "../deck/actions";

function* save(payload) {
    const deck = yield select(selectors.deck);
    
    if (!deck) {
        return;
    }

    const response = yield send({ method: `${API_CARDS}/${deck.id}`, data: payload.card});
    
    if (response.status !== 201) {
        return;
    }

    yield put(addCard({ card: response.data }));
}

function* saveEdition(payload) {
    const response = yield update({ method: `${API_CARDS}/${payload.card.id}`, data: payload.card});

    if (response.status !== 200) {
        return;
    }

    const { card } = payload;

    yield put(updateCard({ card }));
}

function* removeCard() {
    const card = yield select(selectors.card);

    const response = yield remove({ method: `${API_CARDS}/${card.id}`});

    if (response.status !== 200) {
        return;
    }

    yield put(deleteCard({ card }));
}

export default all([
    takeLatest('@card/SAVE', save),
    takeLatest('@card/SAVE_EDITION', saveEdition),
    takeLatest('@card/REMOVE_CARD', removeCard),
]);
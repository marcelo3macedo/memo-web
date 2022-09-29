import { all, put, select, takeLatest } from "redux-saga/effects";

import * as selectors from './selectors';
import { addSubmitSuccess, editRemoveSuccess, editSubmitSuccess } from "./actions";
import { closeAction } from "../modals/actions";
import { remove, send, update } from "@services/Api/requester";
import { API_CARDS } from "@services/Api/routes";

function* addSubmitAction({ payload }:any) {
    const { deckId, card } = payload || {}    
    if (!deckId || !card) {
        return;
    }

    const response = yield send({ method: `${API_CARDS}/${deckId}`, data: card})    
    if (response.status !== 201) {
        return;
    }

    yield put(addSubmitSuccess())
}

function* editSubmitAction({ payload }:any) {
    const { card } = payload || {}
    const response = yield update({ method: `${API_CARDS}/${card.id}`, data: card});

    if (response.status !== 200) {
        return;
    }

    yield put(editSubmitSuccess())
}

function* closeModalAction() {
    yield put(closeAction())
}

function* confirmRemoveAction(e) {
    const card = yield select(selectors.card)
    const response = yield remove({ method: `${API_CARDS}/${card.id}`})

    if (response.status !== 200) {
        return;
    }

    yield put(editRemoveSuccess())
}

function* confirmRemoveSuccessAction() {
    yield put(closeAction())
}

export default all([
    takeLatest('@cards/ADD_SUBMIT', addSubmitAction),
    takeLatest('@cards/ADD_SUBMIT_SUCCESS', closeModalAction),
    takeLatest('@cards/EDIT_SUBMIT', editSubmitAction),
    takeLatest('@cards/EDIT_SUBMIT_SUCCESS', closeModalAction),
    takeLatest('@cards/CONFIRM_REMOVE', confirmRemoveAction),
    takeLatest('@cards/CONFIRM_REMOVE_SUCCESS', confirmRemoveSuccessAction),    
])
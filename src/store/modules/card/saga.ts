
import { all, put, takeLatest, select } from "redux-saga/effects";
import * as selectors from './selectors';
import { API_CARDS } from "@services/Api/routes";
import { loadDeckAction } from "../personal/actions";
import { REQUESTER_DELETE, REQUESTER_POST, REQUESTER_PUT } from "@constants/Requester";
import { request } from "@services/Api/requester";

function* save(payload) {
    const deck = yield select(selectors.deck);
    
    if (!deck) {
        return;
    }

    const response = yield request({  
        type: REQUESTER_POST, method: `${API_CARDS}/${deck.id}`, data: payload.card});
    
    if (response.status !== 201) {
        return;
    }

    yield put(loadDeckAction())
}

function* editCard({ payload }:any) {
    const response = yield request({ 
        type: REQUESTER_PUT, method: `${API_CARDS}/${payload.card.id}`, data: payload.card});

    if (response.status !== 200) {
        return;
    }

    yield put(loadDeckAction())
}

function* removeCard() {
    const card = yield select(selectors.card);

    const response = yield request({ 
        type: REQUESTER_DELETE, method: `${API_CARDS}/${card.id}`});

    if (response.status !== 200) {
        return;
    }

    yield put(loadDeckAction())
}

export default all([
    takeLatest('@card/CONFIRM_REMOVE', removeCard),
    takeLatest('@card/CONFIRM_EDIT', editCard),
    takeLatest('@card/SAVE', save),    
]);
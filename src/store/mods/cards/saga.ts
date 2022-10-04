import { all, put, select, takeLatest } from "redux-saga/effects";

import * as selectors from './selectors';
import { addSubmitSuccess, editSubmitSuccess, removeSubmitSuccess, updateListAction } from "./actions";
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

    yield put(addSubmitSuccess({ card: response.data }))
}

function* editSubmitAction({ payload }:any) {
    const { card } = payload || {}
    const response = yield update({ method: `${API_CARDS}/${card.id}`, data: card});

    if (response.status !== 200) {
        return;
    }

    yield put(editSubmitSuccess({ card }))
}

function* confirmRemoveAction() {
    const card = yield select(selectors.card)
    const response = yield remove({ method: `${API_CARDS}/${card.id}`})

    if (response.status !== 200) {
        return;
    }

    yield put(removeSubmitSuccess({ card }))
}

function* confirmRemoveSuccessAction({ payload }:any) {
    const { card } = payload || {}
    const list = yield select(selectors.list)    
    const editList = Object.assign([], list)
    const result = editList.filter(i => {
        return i.id !== card.id
    })

    yield put(updateListAction({ list: result }))
    yield put(closeAction())
}

function* addSubmitSuccessAction({ payload }:any) {
    const { card } = payload || {}
    const list = yield select(selectors.list)    
    const editList = Object.assign([], list)
    editList.push(card)

    yield put(updateListAction({ list: editList }))
}

function* editSubmitSuccessAction({ payload }:any) {
    const { card } = payload || {}
    const list = yield select(selectors.list)    
    const editList = Object.assign([], list)
    const result = editList.map(i => {
        if (i.id === card.id) return card
        return i
    })
    
    yield put(updateListAction({ list: result }))
}

export default all([
    takeLatest('@cards/ADD_SUBMIT', addSubmitAction),
    takeLatest('@cards/ADD_SUBMIT_SUCCESS', addSubmitSuccessAction),
    takeLatest('@cards/EDIT_SUBMIT', editSubmitAction),
    takeLatest('@cards/EDIT_SUBMIT_SUCCESS', editSubmitSuccessAction),
    takeLatest('@cards/CONFIRM_REMOVE', confirmRemoveAction),
    takeLatest('@cards/CONFIRM_REMOVE_SUCCESS', confirmRemoveSuccessAction),
])
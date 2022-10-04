import { all, put, takeLatest } from "redux-saga/effects";

import { remove, retrieve, send, update } from "@services/Api/requester";
import { API_DECKS } from "@services/Api/routes";
import { addSubmitSuccess, editSubmitActionSuccess, openActionSuccess, removeSubmitActionSuccess } from "./actions";
import { navigatePush } from "@store/mods/navigate/actions";
import { PATH_EDITSESSION } from "@services/Navigation";
import { updateListAction } from "../cards/actions";
import { removeFromListAction } from "../sessions/actions";

function* addSubmitAction({ payload }:any) {
    const { deck } = payload || {}
    if (!deck) {
        return;
    }

    const response = yield send({ method: `${API_DECKS}`, data: deck });
    if (!response || response.status !== 201) {
        return;
    }

    yield put(addSubmitSuccess({ deck: response.data }))
}

function* addSubmitSuccessAction() {
    yield put(updateListAction({ list: [] }))
    yield put(navigatePush({ path: `${PATH_EDITSESSION}` }))
}

function* openAction({ payload }:any) {
    const { id } = payload || {}
    const response = yield retrieve({ method: `${API_DECKS}/${id}`})

    if (response.status !== 200) {
        return;
    }

    yield put(openActionSuccess({ deck: response.data }))
}

function* openSuccessAction({ payload }:any) {
    const { deck } = payload || {}

    yield put(updateListAction({ list: deck.cards }))
    yield put(navigatePush({ path: `${PATH_EDITSESSION}` }))
}

function* editSubmitAction({ payload }:any) {
    const { deck } = payload;
    const response = yield update({ method: `${API_DECKS}/${deck.id}`, data: deck });
    
    if (response.status !== 200) {
        return;
    }

    yield put(editSubmitActionSuccess({ deck }))
}

function* removeAction({ payload }:any) {
    const { id } = payload || {}
    const response = yield remove({ method: `${API_DECKS}/${id}` });

    if (response.status !== 200) {
        return
    }

    yield put(removeSubmitActionSuccess({ id }))
}

function* removeActionSuccess({ payload }:any) {
    const { id } = payload || {}    
    yield put(removeFromListAction({ id }))
}

export default all([
    takeLatest('@decks/ADD_SUBMIT', addSubmitAction),
    takeLatest('@decks/ADD_SUBMIT_SUCCESS', addSubmitSuccessAction),  
    takeLatest('@decks/EDIT_SUBMIT', editSubmitAction),
    takeLatest('@decks/OPEN', openAction),
    takeLatest('@decks/OPEN_SUCCESS', openSuccessAction),
    takeLatest('@decks/REMOVE_SUBMIT', removeAction),
    takeLatest('@decks/REMOVE_SUBMIT_SUCCESS', removeActionSuccess)
])
import { all, put, takeLatest } from "redux-saga/effects";

import { API_DECKS, API_DECKSCLONE, API_SESSIONSFEED } from "@services/Api/routes";
import { addSubmitSuccess, editSubmitActionSuccess, feedAction, loadActionSuccess, openActionSuccess, removeSubmitActionSuccess } from "./actions";
import { navigatePush } from "@store/mods/navigate/actions";
import { PATH_EDITSESSION, PATH_SESSIONPUBLIC } from "@services/Navigation";
import { updateListAction } from "../cards/actions";
import { removeFromListAction } from "../sessions/actions";
import { loadAction as loadReviewAction } from "../review/actions";
import { request } from "@services/Api/requester";
import { REQUESTER_DELETE, REQUESTER_GET, REQUESTER_POST, REQUESTER_PUT } from "@constants/Requester";

function* addSubmitAction({ payload }:any) {
    const { deck } = payload || {}
    if (!deck) {
        return;
    }

    const response = yield request({ type: REQUESTER_POST, method: `${API_DECKS}`, data: deck });
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
    const response = yield request({ type: REQUESTER_GET, method: `${API_DECKS}/${id}`})

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

function* loadAction({ payload }:any) {
    const { id } = payload || {}
    const response = yield request({ type: REQUESTER_GET, method: `${API_DECKS}/${id}`})

    if (response.status !== 200) {
        return;
    }

    yield put(loadActionSuccess({ deck: response.data }))
}

function* loadSuccessAction({ payload }:any) {
    const { deck } = payload || {}

    yield put(updateListAction({ list: deck.cards }))
}

function* editSubmitAction({ payload }:any) {
    const { deck } = payload;
    const response = yield request({ type: REQUESTER_PUT, method: `${API_DECKS}/${deck.id}`, data: deck });
    
    if (response.status !== 200) {
        return;
    }

    yield put(editSubmitActionSuccess({ deck }))
}

function* removeAction({ payload }:any) {
    const { id } = payload || {}
    const response = yield request({ type: REQUESTER_DELETE, method: `${API_DECKS}/${id}` });

    if (response.status !== 200) {
        return
    }

    yield put(removeSubmitActionSuccess({ id }))
}

function* removeActionSuccess({ payload }:any) {
    const { id } = payload || {}
    yield put(removeFromListAction({ id }))
}

function* redirectAction({ payload }:any) {
    const { id } = payload || {}
    yield put(navigatePush({ path: `${PATH_SESSIONPUBLIC}/${id}` }))
}

function* cloneAction({ payload }:any) {
    const { id } = payload;
    const response = yield request({type: REQUESTER_GET,  method: `${API_DECKSCLONE}/${id}` });

    if (response.status !== 201) {
        return;
    }

    yield put(feedAction({ deck: response.data }));
}

function* feedSessionAction({ payload }:any) {
    const { deck } = payload;
    const response = yield request({ type: REQUESTER_GET, method: `${API_SESSIONSFEED}/${deck.id}` });

    if (response.status !== 200) {
        return;
    }

    const session = response.data || {}    
    yield put(loadReviewAction({ session }));
}

export default all([
    takeLatest('@decks/ADD_SUBMIT', addSubmitAction),
    takeLatest('@decks/ADD_SUBMIT_SUCCESS', addSubmitSuccessAction),  
    takeLatest('@decks/EDIT_SUBMIT', editSubmitAction),
    takeLatest('@decks/OPEN', openAction),
    takeLatest('@decks/OPEN_SUCCESS', openSuccessAction),
    takeLatest('@decks/LOAD', loadAction),
    takeLatest('@decks/LOAD_SUCCESS', loadSuccessAction),
    takeLatest('@decks/REMOVE_SUBMIT', removeAction),
    takeLatest('@decks/REMOVE_SUBMIT_SUCCESS', removeActionSuccess),
    takeLatest('@decks/REDIRECT', redirectAction),
    takeLatest('@decks/CLONE', cloneAction),
    takeLatest('@decks/FEED', feedSessionAction)
])
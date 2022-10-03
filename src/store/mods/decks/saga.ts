import { all, put, takeLatest } from "redux-saga/effects";

import { send, update } from "@services/Api/requester";
import { API_DECKS } from "@services/Api/routes";
import { addSubmitSuccess, editSubmitActionSuccess } from "./actions";
import { navigatePush } from "@store/mods/navigate/actions";
import { PATH_EDITSESSION } from "@services/Navigation";
import { updateListAction } from "../cards/actions";

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

function* editSubmitAction({ payload }:any) {
    const { deck } = payload;
    const response = yield update({ method: `${API_DECKS}/${deck.id}`, data: deck });
    
    if (response.status !== 200) {
        return;
    }

    yield put(editSubmitActionSuccess({ deck }));
}

export default all([
    takeLatest('@decks/ADD_SUBMIT', addSubmitAction),
    takeLatest('@decks/ADD_SUBMIT_SUCCESS', addSubmitSuccessAction),    
    takeLatest('@decks/EDIT_SUBMIT', editSubmitAction),
])
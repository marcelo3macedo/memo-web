import { remove } from "@services/Api/requester";
import { API_DECKS } from "@services/Api/routes";
import { loadAction } from "@store/modules/sessions/actions";
import { all, put, select, takeLatest } from "redux-saga/effects";
import { removeSessionFailureAction, removeSessionSuccessAction } from "./actions";
import * as selectors from './selectors';

function* removeDeck() {
    const deckRemove = yield select(selectors.deckRemove);
    
    if (!deckRemove || !deckRemove.target) {
        return yield(put(removeSessionFailureAction()));
    }

    const response = yield remove({ method: `${API_DECKS}/${deckRemove.target.id}` });

    if (response.status !== 200) {
        return yield(put(removeSessionFailureAction()));
    }

    yield put(removeSessionSuccessAction());
}

function* removeSuccessDeck() {
    yield put(loadAction());
}

export default all([
    takeLatest('@decks_remove/REMOVE', removeDeck),
    takeLatest('@decks_remove/REMOVE_SUCCESS', removeSuccessDeck),
]);
import { all, put, takeLatest } from "redux-saga/effects";
import { API_DECKS } from "@services/Api/routes";
import { loadFailureAction, loadSuccessAction } from "./actions";
import { PATH_DECK } from "@services/Navigation";
import { navigatePush } from "@store/mods/navigate/actions";
import { request } from "@services/Api/requester";
import { REQUESTER_GET } from "@constants/Requester";

function* open({ payload }:any) {
    const { deck } = payload
    const path = `${PATH_DECK}/${deck.path}/${deck.id}`

    yield put(navigatePush({ path }))    
}
function* load({ payload }:any) {
    const response = yield request({ type: REQUESTER_GET, method: `${API_DECKS}/${payload.deckId}` });
    
    if (response.status !== 200) {
        yield put(loadFailureAction());
        return;
    }

    const deck = response.data
    yield put(loadSuccessAction({ deck }));
}
export default all([
    takeLatest('@decks_open/OPEN', open),
    takeLatest('@decks_open/LOAD', load),
]);

import { all, put, takeLatest } from "redux-saga/effects";
import { retrieve } from "@services/Api/requester";
import { API_PERSONALDECKS } from "@services/Api/routes";
import { loadDecksSuccess } from "./actions";

function* loadDecks() {
    const response = yield retrieve({ method: API_PERSONALDECKS });
    
    if (response.status !== 200) {
        return;
    }

    yield put(loadDecksSuccess({ decks: response.data }));
}

export default all([
    takeLatest('@personal/LOAD_DECKS', loadDecks),
]);
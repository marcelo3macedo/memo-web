
import { all, put, takeLatest } from "redux-saga/effects";
import { navigatePush } from "@store/modules/navigate/actions";
import { PATH_DECK, PATH_ADDDECK, PATH_EDITSESSION } from '@services/Navigation';
import { send, retrieve, update, remove } from "@services/Api/requester";
import { API_DECKS, API_SESSIONSFEED, API_DECKSCLONE, API_DECKSOPTIONS, API_DECKSPATH, API_CARDS } from "@services/Api/routes";
import { openSuccessAction, saveSuccessAction, reviewAction, openPathFailure, openPathSuccess, editFailedAction, editSuccessAction, addCardFailure, addCardSuccess, updateCardFailure, updateCardSuccess, deleteCardFailure, deleteCardSuccess, openFailureAction } from "./actions";
import { loadFrequenciesSuccess } from "../frequencies/actions";
import { loadThemesSuccess } from "../themes/actions";
import { loadAction } from "../review/actions";

function* loadOptions() {
    const response = yield retrieve({ method: API_DECKSOPTIONS });

    if (response.status !== 200 || !response.data) {
        return;
    }

    const { frequencies, themes } = response.data;
    yield put(loadFrequenciesSuccess({ frequencies }));
    yield put(loadThemesSuccess({ themes }));
}

function* save({ payload }:any) {
    const response = yield send({ method: `${API_DECKS}`, data: payload });
    
    if (response.status !== 201) {
        return;
    }

    yield put(saveSuccessAction({ deck: response.data }));
}

function* edit({ payload }:any) {
    const { deck } = payload;
    const response = yield update({ method: `${API_DECKS}/${deck.id}`, data: deck });
    
    if (response.status !== 200) {
        yield put(editFailedAction());
        return;
    }

    yield put(editSuccessAction());
}

function* saveSuccess() {
    yield put(navigatePush({ path: PATH_EDITSESSION }));
}

function* open({ payload }:any) {
    const response = yield retrieve({ method: `${API_DECKS}/${payload.deck.id}` });
    
    if (response.status !== 200) {
        yield put(openFailureAction());
        return;
    }

    yield put(openSuccessAction({ deck: response.data}));
}

function* openPublic({ payload }:any) {
    const response = yield retrieve({ method: `${API_DECKS}/${payload.deck.id}?isPublic=true` });
    
    if (response.status !== 200) {
        return;
    }

    yield put(openSuccessAction({ deck: response.data}));
}

function* add() {
    yield put(navigatePush({ path: PATH_ADDDECK }));
}

function* review(data) {
    const { deck } = data.payload;

    const response = yield retrieve({ method: `${API_SESSIONSFEED}/${deck.id}` });

    if (response.status !== 200) {
        return;
    }

    yield put(loadAction({ session: response.data }));
}

function* finish() {
    yield put(navigatePush({ path: PATH_DECK }));
}

function* clone(data) {
    const { deck } = data.payload;
    const response = yield retrieve({ method: `${API_DECKSCLONE}/${deck.id}` });

    if (response.status !== 201) {
        return;
    }

    yield put(reviewAction({ deck: response.data }));
}

function* openPath({ payload }:any) {
    const { path } = payload;
    const response = yield retrieve({ method: `${API_DECKSPATH}/${path}` });

    if (response.status !== 200) {
        yield put(openPathFailure())
        return;
    }    

    yield put(openPathSuccess({ deck: response.data }))
}

function* addCard({ payload }:any) {
    const { deck, card } = payload;

    if (!deck) {
        yield put(addCardFailure());
        return;
    }

    const response = yield send({ method: `${API_CARDS}/${deck.id}`, data: card});
    
    if (response.status !== 201) {
        yield put(addCardFailure());
        return;
    }

    yield put(addCardSuccess({ card: response.data }));    
}

function* updateCard({ payload }:any) {
    const { card } = payload;

    if (!card || !card.id) {
        yield put(updateCardFailure());
        return;
    }

    const response = yield update({ method: `${API_CARDS}/${card.id}`, data: card});
    
    if (response.status !== 200) {
        yield put(updateCardFailure());
        return;
    }

    yield put(updateCardSuccess({ card }));    
}

function* deleteCard({ payload }:any) {
    const { card } = payload;

    if (!card || !card.id) {
        yield put(deleteCardFailure());
        return;
    }

    const response = yield remove({ method: `${API_CARDS}/${card.id}`});
    
    if (response.status !== 200) {
        yield put(deleteCardFailure());
        return;
    }

    yield put(deleteCardSuccess({ card }));    
}

export default all([
    takeLatest('@deck/OPEN', open),
    takeLatest('@deck/SAVE', save),
    takeLatest('@deck/EDIT', edit),
    takeLatest('@deck/SAVE_SUCCESS', saveSuccess),  
    takeLatest('@deck/ADD_CARD', addCard),
    takeLatest('@deck/UPDATE_CARD', updateCard),
    takeLatest('@deck/DELETE_CARD', deleteCard),
    
    takeLatest('@deck/LOAD_OPTIONS', loadOptions),
    takeLatest('@deck/OPEN_PUBLIC', openPublic),
    takeLatest('@deck/REVIEW', review),
    takeLatest('@deck/CLONE', clone),
    takeLatest('@deck/ADD', add),
    takeLatest('@deck/FINISH', finish),
    takeLatest('@deck/OPEN_PATH', openPath),
]);
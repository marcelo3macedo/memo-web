
import { all, put, takeLatest } from "redux-saga/effects";
import { navigatePush } from "@store/modules/navigate/actions";
import { PATH_EDITDECK, PATH_DECK, PATH_REVIEW } from '@services/Navigation';

function* save({ name }:any) {
    yield put(navigatePush({ path: PATH_EDITDECK }));    
}

function* open() {
    yield put(navigatePush({ path: PATH_DECK }));
}

function* review() {
    yield put(navigatePush({ path: PATH_REVIEW }));
}

export default all([
    takeLatest('@deck/SAVE', save),
    takeLatest('@deck/OPEN', open),
    takeLatest('@deck/REVIEW', review),
]);
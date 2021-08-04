
import { all, put, takeLatest } from "redux-saga/effects";
import { navigatePush } from "@store/modules/navigate/actions";
import { PATH_ADDCARD, PATH_EDITDECK, PATH_EDITCARD } from '@services/Navigation';

function* newCard() {
    yield put(navigatePush({ path: PATH_ADDCARD }));    
}

function* editCard() {
    yield put(navigatePush({ path: PATH_EDITCARD }));    
}

function* save() {
    yield put(navigatePush({ path: PATH_EDITDECK })); 
}

export default all([
    takeLatest('@card/NEW', newCard),
    takeLatest('@card/EDIT', editCard),
    takeLatest('@card/SAVE', save),
]);
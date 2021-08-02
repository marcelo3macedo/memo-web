
import { all, put, takeLatest } from "redux-saga/effects";
import { navigatePush } from "@store/modules/navigate/actions";
import { PATH_EDITDECK } from '@services/Navigation';

function* save({ name }:any) {
    yield put(navigatePush({ path: PATH_EDITDECK }));    
}

export default all([
    takeLatest('@deck/SAVE', save),
]);
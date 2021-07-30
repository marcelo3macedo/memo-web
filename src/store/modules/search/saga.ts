
import { all, put, takeLatest } from "redux-saga/effects";
import { navigatePush } from "@store/modules/navigate/actions";
import { PATH_SEARCHDECK } from '@services/Navigation';

function* search({ term }:any) {
    yield put(navigatePush({ path: PATH_SEARCHDECK }));    
}

export default all([
    takeLatest('@search/SEARCH_ACTION', search),
]);
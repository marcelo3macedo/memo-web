
import { all, put, select, takeLatest } from "redux-saga/effects";
import { retrieve } from "@services/Api/requester";
import { API_SEARCH } from "@services/Api/routes";
import { loadFailedAction, loadMoreActionSuccess, loadSuccessAction } from "./actions";
import * as selectors from './selectors';

function* load() {
    const { query } = yield select(selectors.gallery);
    const params = `${query ? ("/" + query):""}`;
    const response = yield retrieve({ method: `${API_SEARCH}${params}` });

    if (response.status !== 200 || !response.data) {
        return yield put(loadFailedAction());
    }

    const { decks, categories, featured } = response.data;
    yield put(loadSuccessAction({ decks, categories, featured }));
}

function* loadMore() {
    const { actualPage, query, decks } = yield select(selectors.gallery)
    const params = `${query ? ("/" + query):""}`;
    const nextPage = actualPage + 1
    const response = yield retrieve({ method: `${API_SEARCH}${params}?page=${nextPage}` });
    
    if (response.status !== 200) {
        return;
    }

    const data = decks.concat(response.data.decks.results)
    yield put(loadMoreActionSuccess({ data, actualPage: nextPage }));
}

export default all([
    takeLatest('@gallery/LOAD', load),
    takeLatest('@gallery/QUERY', load),
    takeLatest('@gallery/LOAD_MORE', loadMore)
]);
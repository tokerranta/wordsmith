import { put, call, takeLatest } from 'redux-saga/effects';
import * as types from './actionTypes';
import * as actions from './actions';
import api from './api';

function* requestReverseHistory() {
    try {
        const reverseHistory = yield call(api.getReverseHistory);
        yield put(actions.requestReverseHistorySucceeded(reverseHistory));
    } catch (e) {
        yield put(actions.requestReverseHistoryFailed(e.message));
    }
}

export function* reverseHistorySaga() {
    yield takeLatest(types.REQUEST_REVERSE_HISTORY, requestReverseHistory);
}

function* reversePhrase(action) {
    try {
        const reversed = yield call(api.reversePhrase, action.phrase);
        yield put(actions.reversePhraseSucceeded(reversed));
        yield put(actions.requestReverseHistory());
    } catch (e) {
        yield put(actions.reversePhraseFailed(e.message));
    }
}

export function* reversePhraseSaga() {
    yield takeLatest(types.REVERSE_PHRASE, reversePhrase);
}
import { fork, all } from 'redux-saga/effects';
import { reverseHistorySaga, reversePhraseSaga } from './home/sagas';

export default function* rootSaga() {
    yield all([
        reverseHistorySaga(),
        reversePhraseSaga()
    ]);
}
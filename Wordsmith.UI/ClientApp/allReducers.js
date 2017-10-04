import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reverseHistory from './home/reverseHistoryReducer';
import reversedPhrase from './home/reversedPhraseReducer';

export default combineReducers({
    routerReducer,
    reverseHistory,
    reversedPhrase
});
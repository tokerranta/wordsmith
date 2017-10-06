import * as types from './actionTypes';

export const requestReverseHistory = () => {
    return { type: types.REQUEST_REVERSE_HISTORY };
};

export const requestReverseHistorySucceeded = (reverseHistory) => {
    return { type: types.REQUEST_REVERSE_HISTORY_SUCCEEDED, reverseHistory };
};

export const requestReverseHistoryFailed = (message) => {
    return { type: types.REQUEST_REVERSE_HISTORY_FAILED, message };
};

export const reversePhrase = (phrase) => {
    return { type: types.REVERSE_PHRASE, phrase };
};

export const reversePhraseSucceeded = (reversedPhrase) => {
    return { type: types.REVERSE_PHRASE_SUCCEEDED, reversedPhrase };
};

export const reversePhraseFailed = (message) => {
    return { type: types.REVERSE_PHRASE_SUCCEEDED, message };
};
import expect from 'expect';
import reversedPhraseReducer from './reversedPhraseReducer';
import * as types from './actionTypes';

describe('reversedPhraseReducer', () => {
    const initialState = {
        phrase: '',
        reversed: ''
    };

    describe('when an action of type REQUEST_REVERSE_PHRASE_SUCCEEDED is dispatched', () => {
        const reversedPhrase = { phrase: 'test', reversed: 'tset'};
        const action = { type: types.REVERSE_PHRASE_SUCCEEDED, reversedPhrase };
        const actual = reversedPhraseReducer(initialState, action);

        it('should return the reversed phrase', () => {
            expect(actual).toEqual(reversedPhrase);
        });
    });

    describe('when an action of type REQUEST_REVERSE_PHRASE: is dispatched', () => {
        const action = { type: types.REVERSE_PHRASE };
        const actual = reversedPhraseReducer(initialState, action);

        it('should return the initial state', () => {
            expect(actual).toBe(initialState);
        });
    });
});
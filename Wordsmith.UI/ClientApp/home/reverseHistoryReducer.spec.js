import expect from 'expect';
import reversedHistoryReducer from './reverseHistoryReducer';
import * as types from './actionTypes';

describe('reverseHistoryReducer', () => {
    const initialState = [
        {phrase: 'test', reversed: 'tset'}
    ];

    describe('when an action of type REQUEST_REVERSE_HISTORY_SUCCEEDED is dispatched', () => {
        const reverseHistory = [
            {phrase: 'test', reversed: 'tset'},
            {phrase: 'test2', reversed: '2tset'}
        ];
        const action = { type: types.REQUEST_REVERSE_HISTORY_SUCCEEDED, reverseHistory };
        const actual = reversedHistoryReducer(initialState, action);

        it('should return the reversed history', () => {
            expect(actual).toEqual(reverseHistory);
        });
    });

    describe('when an action of type REQUEST_REVERSE_HISTORY is dispatched', () => {
        const action = { type: types.REQUEST_REVERSE_HISTORY };
        const state = reversedHistoryReducer(initialState, action);

        it('should return the initial state', () => {
            expect(state).toBe(initialState);
        });
    });
});
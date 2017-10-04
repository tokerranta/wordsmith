import * as types from './actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case types.REQUEST_REVERSE_HISTORY_SUCCEEDED:
            return [...action.reverseHistory];
        default: 
            return state;
    }
}
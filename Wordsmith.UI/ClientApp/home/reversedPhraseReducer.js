import * as types from './actionTypes';

const initialState = {
    phrase: '',
    reversed: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
        case types.REVERSE_PHRASE_SUCCEEDED:
            console.log(action.reversedPhrase);
            return Object.assign({}, state, action.reversedPhrase);
        default: 
            return state;
    }
}
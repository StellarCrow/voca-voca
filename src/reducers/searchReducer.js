import {SEARCH_DECK} from "../actions/types";

const initialState = '';


export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_DECK:
            return action.payload;
        default:
            return state;
    }
}

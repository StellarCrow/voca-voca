import { v4 as uuidv4 } from 'uuid';
import {GET_DECKS, ADD_DECK, DELETE_DECK} from "../actions/types";

const initialState = {
    decks: [
        {id: uuidv4(), name: 'Deck', words: 2},
        {id: uuidv4(), name: 'Simple', words: 20},
        {id: uuidv4(), name: 'Advance', words: 12},
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DECKS:
            return {
                ...state
            };
        default:
            return state;
    }
}

import {GET_DECKS, ADD_DECK, DELETE_DECK} from "./types";

export const getDecks = () => {
    return {
        type: GET_DECKS
    }
};

import {GET_DECKS, ADD_DECK, DELETE_DECK} from "./types";

export const getDecks = () => {
    return {
        type: GET_DECKS
    }
};

export const deleteDeck = id => {
    return {
        type: DELETE_DECK,
        payload: id
    }
};

export const addDeck = note => {
    return {
        type: ADD_DECK,
        payload: note
    }
};

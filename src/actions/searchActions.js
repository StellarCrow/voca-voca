import {SEARCH_DECK} from "./types";

export const searchDeck = (query) => {
    return {
        type: SEARCH_DECK,
        payload: query,
    }
};

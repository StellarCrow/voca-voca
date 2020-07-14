import React from 'react';
import './Deck.scss';
import {MAX_WORDS} from '../../utils/constants';

const Deck = ({deck}) => {
    return (
        <div className='deck'>
            <div className="deck__name">{deck.name}</div>
            <div className="deck__words">
                {deck.words} / {MAX_WORDS}
            </div>
        </div>
    )
};

export default Deck;

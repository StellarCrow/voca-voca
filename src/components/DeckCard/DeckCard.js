import React from 'react';
import './DeckCard.scss';
import {MAX_WORDS} from '../../utils/constants';
import {NavLink} from "react-router-dom";

const DeckCard = ({deck}) => {
    return (
        <div className='deck'>
            <div className="deck__name">
                <NavLink to={'deck/' + deck.id}>{deck.name}</NavLink></div>
            <div className="deck__words">
                {deck.words} / {MAX_WORDS}
            </div>
        </div>
    )
};

export default DeckCard;

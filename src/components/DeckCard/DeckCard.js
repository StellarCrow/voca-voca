import React from 'react';
import './DeckCard.scss';
import {MAX_WORDS} from '../../utils/constants';
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router-dom";

const DeckCard = ({deck}) => {
    const history = useHistory();

    const redirect = () => {
        history.push('deck/' + deck.id);
    };
    return (
        <div className='deck' onClick={redirect}>
            <div className="deck__name">
                {deck.name}
            </div>
            <div className="deck__words">
                {deck.words} / {MAX_WORDS}
            </div>
        </div>
    )
};

export default DeckCard;

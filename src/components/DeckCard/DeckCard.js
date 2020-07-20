import React from 'react';
import './DeckCard.scss';
import {MAX_WORDS} from '../../utils/constants';
import {useHistory} from "react-router-dom";

const DeckCard = ({deck}) => {
    const history = useHistory();

    const redirect = () => {
        history.push('deck/' + deck.id);
    };
    return (
        <div className={`deck deck--${deck.style}`} onClick={redirect}>
            <div className="deck__name">
                {deck.name}
            </div>
            <div className="deck__words">
                {deck.records.length} / {MAX_WORDS}
            </div>
        </div>
    )
};

export default DeckCard;

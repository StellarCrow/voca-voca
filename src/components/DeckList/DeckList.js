import React from 'react';
import DeckCard from "../DeckCard/DeckCard";
import './DeckList.scss';
import AddDeckButton from "../AddDeckButton/AddDeckButton";

const DeckList = (props) => {
    const {decks} = props;

    if(decks.length > 0) {
        return (
            <ul className='list'>
                {decks.map(deck => {
                    return <li key={deck.id} className='list__item'>
                        <DeckCard deck={deck}/>
                    </li>
                })}
            </ul>
        )
    } else {
        return (
            <div className='no-decks'>
                <h3 className="no-decks__title">There are no decks.</h3>
                <AddDeckButton/>
            </div>
        )
    }

}

export default DeckList;

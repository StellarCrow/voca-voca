import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDecks} from "../../actions/deckActions";
import PropTypes from 'prop-types';
import Deck from "../Deck/Deck";

class DeckList extends Component {

    componentDidMount() {
        this.props.getDecks();
    }

    render() {
        const {decks} = this.props.deck;
        return (
            <ul className='list'>
                {decks.map(deck => {
                    return <li key={deck.id} className='list__item'>
                        <Deck deck={deck} />
                    </li>
                })}
            </ul>
        );
    }
}

DeckList.propTypes = {
    getDecks: PropTypes.func.isRequired,
    deck: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    deck: state.deck
});

export default connect(mapStateToProps, {getDecks})(DeckList);

import React, {Component} from 'react';
import DeckList from "../../components/DeckList/DeckList";
import './Home.scss';
import Statisctics from "../../components/Statistics/Statisctics";

import {connect} from 'react-redux';
import {getDecks} from "../../actions/deckActions";
import PropTypes from 'prop-types';
import AddDeckButton from "../../components/AddDeckButton/AddDeckButton";

class Home extends Component {

    componentDidMount() {
        this.props.getDecks();
    }

    render() {
        const {decks} = this.props.deck;
        return (
            <section className='home'>
                <div className="home__container">
                    <div className="home__header">
                        <h1 className='home__title'>Voca-Voca</h1>
                        <p className='home__subtitle'>Learn new words in a simple way!</p>
                    </div>
                    <div className="home__decks">
                        <h2 className='home__heading'>My Decks</h2>
                        <DeckList decks={decks}></DeckList>
                    </div>
                </div>
                <div className="home__sidebar">
                    <div className="home__progress">
                        <div className="home__heading">Progress</div>
                        <Statisctics></Statisctics>
                    </div>
                    <div className="home__import">
                        <button type='button' className='button button--primary'>Import Deck</button>
                    </div>
                </div>
            </section>
        );
    }
}

Home.propTypes = {
    getDecks: PropTypes.func.isRequired,
    deck: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    deck: state.deck
});

export default connect(mapStateToProps, {getDecks})(Home);


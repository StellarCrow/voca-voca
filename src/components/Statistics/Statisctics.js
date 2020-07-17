import React, {Component} from 'react';
import {StatisticsItem} from "../StatisticsItem/StatisticsItem";
import {connect} from "react-redux";
import {getDecks} from "../../actions/deckActions";
import PropTypes from "prop-types";

class Statisctics extends Component {
    render() {
        const {decks} = this.props.deck;
        return (
            <div className='statistics'>
                <StatisticsItem count={decks.length} title={'Total Decks'}/>
                <StatisticsItem count={0} title={'Completed Decks'}/>
                <StatisticsItem count={56} title={'Total records'}/>
                <StatisticsItem count={2} title={'Learned records'}/>
            </div>
        );
    }
}

Statisctics.propTypes = {
    getDecks: PropTypes.func.isRequired,
    deck: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    deck: state.deck
});

export default connect(mapStateToProps, {getDecks})(Statisctics);

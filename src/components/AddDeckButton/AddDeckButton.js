import React, {Component} from 'react';
import DialogTemplate from "../DialogTemplate/DialogTemplate";
import {addDeck, getDecks} from "../../actions/deckActions";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Deck from "../../entities/Deck";

class AddDeckButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = (value) => {
        this.setState({open: false});
        const {title, style} = value;
        const newDeck = new Deck(title, style);
        this.props.addDeck(newDeck);
    };

    render() {
        return (
            <div>
                <button type='button' className="button button--primary" onClick={this.handleClickOpen}>
                    Add New Deck
                </button>
                <DialogTemplate open={this.state.open} onClose={this.handleClose}/>
            </div>
        );
    }
}

AddDeckButton.propTypes = {
    addDeck: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    deck: state.deck
});

export default connect(mapStateToProps, {addDeck})(AddDeckButton);

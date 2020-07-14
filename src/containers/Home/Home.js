import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DeckList from "../../components/DeckList/DeckList";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hey <FontAwesomeIcon icon='check-square'/></h1>
                <DeckList></DeckList>
            </div>
        );
    }
}

export default Home;

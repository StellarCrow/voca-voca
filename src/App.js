import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'

import {Provider} from 'react-redux';
import store from './store';

import DeckList from "./components/DeckList/DeckList";

library.add(faCheckSquare);

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Hey <FontAwesomeIcon icon='check-square'/></h1>
                <DeckList></DeckList>
            </div>
        </Provider>
    );
}

export default App;

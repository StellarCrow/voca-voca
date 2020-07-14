import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import Deck from "./components/Deck/Deck";

library.add(faCheckSquare);

function App() {
  return (
    <div className="App">
      <h1>Hey <FontAwesomeIcon icon='check-square' /></h1>
        <Deck deck={{name: 'Deck', words: 2}}/>
    </div>
  );
}

export default App;

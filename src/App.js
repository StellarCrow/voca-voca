import React from 'react';
import './styles/global.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare);

function App() {
  return (
    <div className="App">
      <h1>Hey <FontAwesomeIcon icon='check-square' /></h1>
    </div>
  );
}

export default App;

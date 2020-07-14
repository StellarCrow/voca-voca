import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'

import {Provider} from 'react-redux';
import store from './store';

import {Switch, Route, BrowserRouter} from "react-router-dom";
import NotFound from "./containers/NotFound/NotFound";
import Home from "./containers/Home/Home";
import DeckPage from "./containers/DeckPage/DeckPage";

library.add(faCheckSquare);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/deck/:id' component={DeckPage}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

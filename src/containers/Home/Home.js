import React, {Component} from 'react';
import DeckList from "../../components/DeckList/DeckList";
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <section className='home'>
                <div className="home__container">
                    <div className="home__header">
                        <h1 className='home__title'>Voca-Voca</h1>
                        <p className='home__subtitle'>Learn new words in a simple way!</p>
                    </div>
                    <div className="home__decks">
                        <h2 className='home__heading'>My Decks</h2>
                        <DeckList></DeckList>
                    </div>
                </div>
                <div className="home__sidebar">
                    <div className="home__progress">
                        <div className="home__heading">Progress</div>
                    </div>
                    <div className="home__import">
                        <button className='button button--primary'>Import Deck</button>
                    </div>
                </div>



            </section>
        );
    }
}

export default Home;

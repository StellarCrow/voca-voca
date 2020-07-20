import {DECK_STYLE} from '../../utils/constants';
import React, {Component} from 'react';
import './DeckForm.scss';

class DeckForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            background: '',
            title: ''
        }
    }

    componentDidMount() {
        const keys = Object.keys(DECK_STYLE);
        const background = DECK_STYLE[keys[keys.length - 1]];
        this.setState({background});
        this.props.changeBackground(background);
    }

    renderBackgroundStyles = () => {
        const styles = DECK_STYLE;
        const stylesList = [];
        for (let style in styles) {
            stylesList.push(
                <div className='form__field' key={style}>
                    <input type='radio' value={styles[style]} id={style} name='style' className='form__radio' onClick={this.handleChangeStyle} defaultChecked/>
                    <label htmlFor={style} className='form__label'>{styles[style]}</label>
                </div>
            )
        }
        return stylesList;
    };

    createDeck = (event) => {
        event.preventDefault();
        const deckInfo = {
            style: this.state.background,
            title: this.state.title
        };
        this.props.onSubmit(deckInfo);
    };

    handleChangeStyle = (event) => {
        const background = event.target.value;
        this.setState({
            background
        });
        this.props.changeBackground(background);

    };

    handleInput = (event) => {
        this.setState({title: event.target.value})
    };

    render() {
        return (
            <form className='form' onSubmit={this.createDeck}>
                <input type="text" maxLength={30} className="form__input" name='title' placeholder='Deck title...' onChange={this.handleInput} required/>
                <div className="form__backgrounds">
                    {this.renderBackgroundStyles()}
                </div>
                <button type='submit' className='button'>Create</button>
            </form>
        );
    }
}

export default DeckForm;

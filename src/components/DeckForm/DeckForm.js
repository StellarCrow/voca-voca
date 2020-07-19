import React, {useState} from 'react';
import {DECK_STYLE} from '../../utils/constants';

const DeckForm = (props) => {
    const styles = DECK_STYLE;
    const {onSubmit, changeBackground} = props;
    const [style, setStyle] = useState('');
    const [title, setTitle] = useState('');

    const createDeck = (event) => {
        event.preventDefault();
        const deckInfo = {
            style,
            title
        };
        onSubmit(deckInfo);
    };

    const renderStyles = () => {
        const stylesList = [];
        for (let style in styles) {
            stylesList.push(
                <div className='form__field' key={style}>
                    <label htmlFor={style} className='form__label'>{styles[style]}</label>
                    <input type='radio' value={styles[style]} id={style} name='style' className='form__radio' onClick={handleChangeStyle} defaultChecked/>
                </div>
            )
        }
        return stylesList;
    };

    const handleChangeStyle = (event) => {
        const background = event.target.value;
        setStyle(background);
        changeBackground(background);

    };

    const handleInput = (event) => {
        setTitle(event.target.value);
    };

    return (
        <form className='form'>
            <input type="text" maxLength={30} className="form__input" name='title' onChange={handleInput}/>
            {renderStyles()}
            <button type='submit' className='button' onClick={createDeck}>Create</button>
        </form>
    )
};

export default DeckForm;

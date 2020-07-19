import React from 'react';
import {DECK_STYLE} from '../../utils/constants';

const DeckForm = (props) => {
    const styles = DECK_STYLE;
    const {onChangeStyle} = props;

    const handleChangeStyle = (event) => {
        const style = event.target.value;
        onChangeStyle(style);
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

    return (
        <form className='form'>
            <input type="text" maxLength={30} className="form__input" name='title' required/>
            {renderStyles()}
        </form>
    )
};

export default DeckForm;

import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeckForm from "../DeckForm/DeckForm";
import './DialogTemplate.scss';

const DialogTemplate = (props) =>  {
    const {open, onClose} = props;
    const state = {
        style: ''
    };

    const handleClose = () => {
        onClose()
    };

    const handleFormStyle = (value) => {
        state.style = value;
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <div className={state.style ? `dialog dialog--${state.style}` : 'dialog'} >
                <DialogTitle>Create new Deck</DialogTitle>
                <DeckForm onChangeStyle={handleFormStyle}/>
                <button className='button'>Create</button>
            </div>
        </Dialog>
    )
};

export default DialogTemplate;

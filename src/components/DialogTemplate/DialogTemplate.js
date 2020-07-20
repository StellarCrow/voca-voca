import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeckForm from "../DeckForm/DeckForm";
import './DialogTemplate.scss';

class DialogTemplate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            onClose: null,
            background: '',
        }

        this.styles = {
            dialog: {
                minHeight: '50%',
                minWidth: '50%'
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.open !== this.props.open) {
            this.setState({
                open: this.props.open,
                onClose: this.props.onClose
            })
        }
    }

    handleClose = () => {
        this.state.onClose()
    };

    handleChangeBackground = (value) => {
        this.setState({
            background: value
        })
    };

    createDeck = (deck) => {
        this.state.onClose(deck);
    };

    render() {
        return (
            <Dialog open={this.state.open} onClose={this.handleClose} style={{minWidth: '50%'}}>
                <div className={this.state.background ? `dialog dialog--${this.state.background}` : 'dialog'}>
                    <div className="dialog__container">
                        <div className="dialog__title">Create new Deck</div>
                        <DeckForm onSubmit={this.createDeck} changeBackground={this.handleChangeBackground}/>
                    </div>
                </div>
            </Dialog>
        )
    }


};

export default DialogTemplate;
//
//
// const {open, onClose} = props;
// const state = {
//     style: ''
// };
//
// const handleClose = () => {
//     onClose()
// };
//
// const handleFormStyle = (value) => {
//     state.style = value;
// };
//
// return (
//     <Dialog open={open} onClose={handleClose}>
//         <div className={state.style ? `dialog dialog--${state.style}` : 'dialog'} >
//             <DialogTitle>Create new Deck</DialogTitle>
//             <DeckForm onChangeStyle={handleFormStyle}/>
//             <button className='button'>Create</button>
//         </div>
//     </Dialog>
// )

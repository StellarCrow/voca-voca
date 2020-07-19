import React, {Component} from 'react';
import DialogTemplate from "../DialogTemplate/DialogTemplate";

class AddDeckButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = (value) => {
        this.setState({open: false});
        console.log(value);
    };

    render() {
        return (
            <div>
                <button type='button' className="button button--primary" onClick={this.handleClickOpen}>
                    Add New Deck
                </button>
                <DialogTemplate open={this.state.open} onClose={this.handleClose}/>
            </div>
        );
    }
}

export default AddDeckButton;

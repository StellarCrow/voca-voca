import React, {Component} from 'react';

class DeckPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }
    componentDidMount() {
        this.setState({id: this.props.match.params.id});
    }

    render() {
        return (
            <div>
                DeckPage {this.state.id}
            </div>
        );
    }
}

export default DeckPage;

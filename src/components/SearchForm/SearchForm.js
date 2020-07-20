import React, {Component} from 'react';

class SearchForm extends Component {

    constructor(props) {
        super(props);
    }

    handleChangeQuery = (event) => {
        const query = event.target.value.toLowerCase();
        this.props.onQueryChange(query);
    };

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder='Search deck...' onChange={this.handleChangeQuery} className="form__input"/>
            </form>
        );
    }
}

export default SearchForm;

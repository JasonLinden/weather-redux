import React, { Component } from "react";

export class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    // Whenever we call a callback from jsx and the callback funciton references 'this'
    // then it will not be the correct context -> we need to bind to the context
    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a 5 day forecast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    {/* A control field's value is set by the state */}
                    <button
                        type="submit"
                        className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}
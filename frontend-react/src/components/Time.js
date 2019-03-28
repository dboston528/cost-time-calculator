import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = { value: [] };


        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setstate({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <form >
                    <input className="time-input" type='text' placeholder="Time" value={this.state.value} ></input>
                </form>
            </div>
        )
    }
}

export default Time;
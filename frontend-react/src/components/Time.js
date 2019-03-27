import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };

    };
    render() {
        return (
            <div>
                <form >
                    <input className="time-input" type='number' placeholder="Time" value={this.state.value}></input>
                </form>
            </div>
        )
    }
}

export default Time;
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
                <h2>Time</h2>
                <form>
                    <input type='number' value={this.state.value}></input>
                </form>
                <select>
                    <option>Minutes</option>
                    <option>Hours</option>
                </select>
            </div>
        )
    }
}

export default Time;
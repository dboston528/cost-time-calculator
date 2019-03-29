import React, { Component } from 'react';

class Time extends Component {
    render() {
        return (
            <div>
                <form >
                    <input className="time-input" type='text' placeholder="Time" onChange={this.handleTimeChange} ></input>
                </form>
            </div>
        )
    }
}

export default Time;
import React, { Component } from 'react';

class Time extends Component {

    render() {
        return (
            <div>
                <form >
                    <input className="time-input" type='text' placeholder="Time" onChange={this.props.handleTimeChange} value={this.props.time}></input>
                </form>
            </div>
        )
    }
}

export default Time;
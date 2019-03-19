import React, { Component } from 'react';

class Time extends Component {
    render() {
        return (
            <div>
                <h2>Time</h2>
                <form>
                    <input type='number'></input>
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
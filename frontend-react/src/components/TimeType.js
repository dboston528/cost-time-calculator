import React, { Component } from 'react';

class TimeType extends Component {
    render() {
        return (
            <div >
                <select value={this.props.timeType} onChange={this.props.change} className="time-select">
                    <option value='hours'>{this.props.hours}</option>
                    <option value='minutes'>{this.props.minutes}</option>

                </select>
            </div>
        )
    }
}

export default TimeType;
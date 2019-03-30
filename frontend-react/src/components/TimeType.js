import React, { Component } from 'react';

class TimeType extends Component {
    render() {
        return (
            <div >
                <select className="time-select">
                    <option>{this.props.hours}</option>
                    <option>{this.props.minutes}</option>

                </select>
            </div>
        )
    }
}

export default TimeType;
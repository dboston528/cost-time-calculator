import React, { Component } from 'react';

class TimeType extends Component {
    render() {
        return (
            <div>
                <select>
                    <option>Minutes</option>
                    <option>Hours</option>
                </select>
            </div>
        )
    }
}

export default TimeType;
import React, { Component } from 'react';
import '../App.css';

class RoundUp extends Component {
    render() {
        return (
            <div>
                <button className="round">Round up to nearest 15 minutes</button>
            </div>
        )
    }
}

export default RoundUp;
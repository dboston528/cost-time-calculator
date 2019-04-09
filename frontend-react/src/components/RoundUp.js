import React, { Component } from 'react';
import '../App.css';

class RoundUp extends Component {
    render() {
        return (
            <div>
                <button className="round" onClick={this.props.round}>Round</button>
            </div>
        )
    }
}

export default RoundUp;
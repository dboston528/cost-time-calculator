import React, { Component } from 'react';

class Cost extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type='number' placeholder={this.props.cost} className="input" value={this.props.cost}></input>
                </form>
            </div>
        )
    }
}

export default Cost;
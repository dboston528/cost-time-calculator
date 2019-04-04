import React, { Component } from 'react';

class Cost extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type='number' placeholder=' Cost' className="input" value={this.props.cost} onChange={this.props.costChange}></input>
                </form>
            </div>
        )
    }
}

export default Cost;
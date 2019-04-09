import React, { Component } from 'react';

class Cost extends Component {
    render() {
        return (
            <div className="the-input">
                <p className='form-head'>Cost</p>
                <form>
                    <input type='text' placeholder=' Cost' className="input" value={this.props.cost} onChange={this.props.costChange}></input>
                </form>
            </div>
        )
    }
}

export default Cost;
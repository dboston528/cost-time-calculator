import React, { Component } from 'react';

class Cost extends Component {
    render() {
        return (
            <div>
                <h1>Cost</h1>
                <form>
                    <input type='number' placeholder="$"></input>
                </form>
            </div>
        )
    }
}

export default Cost;
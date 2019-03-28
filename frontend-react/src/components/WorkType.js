import React, { Component } from 'react';

class WorkType extends Component {

    render() {
        return (
            <div>
                <select className="work-type">
                    <option>{this.props.dev} (${this.props.devRate}/hour)</option>
                    <option>{this.props.des} (${this.props.desRate}/hour)</option>
                    <option>{this.props.proj} (${this.props.projRate}/hour)</option>
                </select>
            </div>
        )
    }
}

export default WorkType;


import React, { Component } from 'react';

class WorkType extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <select className="work-type">
                    <option>{this.props.dev} (${this.props.devRate}/hour)</option>
                    <option>{this.props.des} (${this.props.desRate}/hour)</option>
                    <option onClick={this.props.projCost}>{this.props.proj} (${this.props.projRate}/hour)</option>
                </select>
            </div>
        )
    }
}

export default WorkType;


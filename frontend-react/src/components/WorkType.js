import React, { Component } from 'react';

class WorkType extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.handleProjectCostChange = this.handleProjectCostChange.bind(this);
    }

    handleProjectCostChange = () => {
        console.log('you clicked It');

    }

    render() {

        return (

            <div>
                <select className="work-type">
                    <option>{this.props.dev} (${this.props.devRate}/hour)</option>
                    <option>{this.props.des} (${this.props.desRate}/hour)</option>
                    <option onSelect={this.props.projCost}>{this.props.proj} (${this.props.projRate}/hour)</option>
                </select>

                <button onClick={this.props.projCost}>Test</button>
            </div>
        )
    }
}

export default WorkType;


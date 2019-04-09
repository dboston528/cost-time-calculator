import React, { Component } from 'react';

class WorkType extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.handleProjectCostChange = this.handleProjectCostChange.bind(this);
    }

    handleProjectCostChange = () => {
        console.log('you clicked project management');

    }

    render() {

        return (

            <div>
                <p className='form-head'>Select a Work Type</p>
                <select className="work-type" value={this.props.value} onChange={this.props.workTypeChange}>
                    <option value='developer'>{this.props.dev} (${this.props.devRate}/hour)</option>
                    <option value='designer'>{this.props.des} (${this.props.desRate}/hour)</option>
                    <option value='projectManage'>{this.props.proj} (${this.props.projRate}/hour)</option>
                </select>
            </div>
        )
    }
}

export default WorkType;


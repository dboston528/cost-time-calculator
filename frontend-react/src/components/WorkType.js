import React, { Component } from 'react';

class WorkType extends Component {

    state = {
        dev: "",
        des: "",
        proj: ""
    }

    async componentDidMount() {
        const url = "http://localhost:5000/api/rates";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ dev: data[0] })
        this.setState({ des: data[1] })
        this.setState({ proj: data[2] })
        console.log(data);

    }

    render() {
        return (
            <div>
                <select className="work-type">
                    <option>{this.state.dev.label} (${this.state.dev.rate}/hour)</option>
                    <option>{this.state.des.label} (${this.state.des.rate}/hour)</option>
                    <option>{this.state.proj.label} (${this.state.proj.rate}/hour)</option>
                </select>
            </div>
        )
    }
}

export default WorkType;


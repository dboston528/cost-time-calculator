import React, { Component } from 'react';
import './App.css';
import WorkType from './components/WorkType';
import Time from './components/Time';
import TimeType from './components/TimeType';
import Cost from './components/Cost';
import RoundUp from './components/RoundUp';
import RoundDown from './components/RoundDown';

class App extends Component {

  state = {
    dev: "",
    des: "",
    proj: "",
    time: "",
    hour: "",
    minute: "Minutes",
    hour: "Hours"
  }

  async componentDidMount() {
    const url = "http://localhost:5000/api/rates";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ dev: data[0] })
    this.setState({ des: data[1] })
    this.setState({ proj: data[2] })
  }

  //Handles the time data input
  handleTimeInputChange = (event) => {
    let timeInput = event.target.value;
    this.setState({ time: timeInput });
    console.log(timeInput);
  }


  render() {
    return (
      <div className="body">
        <div className="Form">
          <header>
            <h1 className="heading">Cost/Time Calculator</h1>
          </header>
          <WorkType
            dev={this.state.dev.label}
            des={this.state.des.label}
            proj={this.state.proj.label}

            devRate={this.state.dev.rate}
            desRate={this.state.des.rate}
            projRate={this.state.proj.rate}
          />
          <div className="time-block">
            <Time
              className="time-input"
              time={this.state.time}
              handleTimeChange={this.handleTimeInputChange} />
            <TimeType
              minutes={this.state.minute}
              hours={this.state.hour} />
          </div>
          <Cost />
          <div className="button-block">
            <RoundUp />
            <RoundDown />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

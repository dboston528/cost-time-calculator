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
    minute: "Minutes",
    hour: "Hours",
    cost: 0,
    rate: '',
    value: 'developer'


  }

  async componentDidMount() {
    const url = "http://localhost:5000/api/rates";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ dev: data[0] })
    this.setState({ des: data[1] })
    this.setState({ proj: data[2] })
    this.setState({ rate: data[0] })
    const initialRate = this.state.dev.rate;
    this.setState({ rate: initialRate })
    // console.log("$" + initialRate + " is the initial rate");
  }

  //Handles the time data input
  handleTimeInputChange = (event) => {
    let timeInput = event.target.value;
    let newCost = timeInput * this.state.rate;
    this.setState({ time: timeInput });
    this.setState({ cost: newCost })
  }


  handleChange = (event) => {
    let newValue = event.target.value;
    this.setState({ value: event.target.value });

    const designRate = this.state.des.rate;
    const projectRate = this.state.proj.rate;
    const developerRate = this.state.dev.rate;
    const designRate2 = this.state.des.rate;

    if (event.target.value = 'designer') {
      this.setState({ rate: designRate });
    } else if (event.target.value = 'projectManage') {
      this.setState({ rate: projectRate })
    } else {
      this.setState({ rate: developerRate })
    }

    if (event.target.value == 'developer') {
      const developerRate2 = this.state.dev.rate;
      let devCost = currentTime * developerRate2;
      this.setState({ cost: devCost });
    }


    let currentTime = this.state.time;
    console.log(currentTime);
    let newCost = currentTime * designRate2;
    this.setState({ cost: newCost });
    console.log(newCost);
  }

  handleHour = (event) => {
  }



  // handleProjectCostChange = () => {
  //   // console.log('you clicked It');
  //   const projectRate = this.state.proj.rate;
  //   let timeInput = this.state.time;
  //   const projCost = timeInput * this.state.rate;
  //   this.setState({ rate: projectRate });
  //   this.setState({ cost: projCost });
  //   console.log(projCost);
  //   console.log(projectRate);
  // }


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
            projCost={this.handleProjectCostChange}
            workTypeChange={this.handleChange}
            value={this.state.value}
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
          <Cost
            cost={this.state.cost}
          />
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

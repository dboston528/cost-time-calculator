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
    value: 'developer',
    timeType: 'hours'
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
    this.setState({ cost: newCost });

    if (this.state.timeType === 'minutes') {
      let time = event.target.value;
      console.log(time);
      const aCost = time / 60 * this.state.rate;
      console.log(time);
      this.setState({ cost: aCost });
    } else if (this.state.timeType === 'hours') {

    }


  }


  handleChange = (event) => {
    let newValue = event.target.value;
    this.setState({ value: event.target.value });

    const designRate = this.state.des.rate;
    const projectRate = this.state.proj.rate;
    const developerRate = this.state.dev.rate;

    if (event.target.value === 'designer') {
      let currentTime = this.state.time;
      let newCost = currentTime * designRate;
      this.setState({ rate: designRate });
      this.setState({ cost: newCost });
    } else if (event.target.value === 'developer') {
      let currentTime = this.state.time;
      let newCost = currentTime * developerRate;
      this.setState({ rate: developerRate });
      this.setState({ cost: newCost });
    } else if (event.target.value === 'projectManage') {
      let currentTime = this.state.time;
      let newCost = currentTime * projectRate;
      this.setState({ rate: projectRate });
      this.setState({ cost: newCost });
    }

    if (this.state.timeType === 'minutes') {
      let rate = this.state.rate;
      let time = this.state.time;
      let cost = rate * time / 60;
      this.setState({ cost: cost });
    }

  }

  timeTypeChange = (event) => {
    this.setState({ timeType: event.target.value });

    if (event.target.value === 'minutes') {
      let theTime = this.state.time;
      let convertTime = theTime * 60;

      let theRate = this.state.rate;
      let newCost = ((convertTime / 60) * theRate);
      console.log(newCost);
      this.setState({ time: convertTime });
      this.setState({ cost: newCost }); //set cost

    } else if (event.target.value === 'hours') {
      let theTime = this.state.time;
      let convertTime = theTime / 60;
      this.setState({ time: convertTime });
    }

    // if (event.target.value === 'minutes') {
    //   let theRate = this.state.rate;
    //   let time = this.state.time;
    //   let conTime = time / 60;
    //   let cost = conTime * theRate;
    //   this.setState({ cost: cost });
    // }

  }

  handleCostInputChange = (event) => {
    this.setState({ cost: event.target.value });
    let cost = event.target.value;
    let rate = this.state.rate;
    let newTime = cost / rate;
    this.setState({ time: newTime });
    console.log(event.target.value);

    if (this.state.timeType === 'minutes') {


    }
  }
  roundChange = () => {
    if (this.state.timeType === 'minutes') {
      let time = this.state.time;
      let newTime = (Math.round(time / 15) * 15) % 60;
      let cost = this.state.cost;
      let rate = this.state.rate;
      let newCost = (newTime / 60) * rate;
      this.setState({ time: newTime });
      this.setState({ cost: newCost });

    }
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
              hours={this.state.hour}
              timeType={this.state.timeType}
              change={this.timeTypeChange} />
          </div>
          <Cost
            cost={this.state.cost}
            costChange={this.handleCostInputChange}
          />
          <div className="button-block">
            <RoundUp
              round={this.roundChange} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;

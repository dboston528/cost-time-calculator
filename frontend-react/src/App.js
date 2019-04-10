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
    cost: '',
    rate: '',
    value: 'developer',
    timeType: 'hours',
    howMany: 'How many hours?'
  }

  async componentDidMount() {
    // const url = "http://localhost:5000/api/rates";
    const url = "https://cost-calculator-backend.herokuapp.com/api/rates";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ dev: data[0] })
    this.setState({ des: data[1] })
    this.setState({ proj: data[2] })
    this.setState({ rate: data[0] })
    const initialRate = this.state.dev.rate;
    this.setState({ rate: initialRate })
  }

  //Handles the time data input
  handleTimeInputChange = (event) => {
    let timeInput = event.target.value;
    let newCost = timeInput * this.state.rate;
    let dollarCost = newCost.toFixed(2);
    this.setState({ time: timeInput });
    this.setState({ cost: dollarCost });

    if (this.state.timeType === 'minutes') {
      let time = event.target.value;
      console.log(time);
      const aCost = time / 60 * this.state.rate;
      let dollarCost = aCost.toFixed(2);
      console.log(time);
      this.setState({ cost: dollarCost });
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
      let dollarCost = newCost.toFixed(2);
      this.setState({ rate: designRate });
      this.setState({ cost: dollarCost });
    } else if (event.target.value === 'developer') {
      let currentTime = this.state.time;
      let newCost = currentTime * developerRate;
      let dollarCost = newCost.toFixed(2);
      this.setState({ rate: developerRate });
      this.setState({ cost: dollarCost });
    } else if (event.target.value === 'projectManage') {
      let currentTime = this.state.time;
      let newCost = currentTime * projectRate;
      let dollarCost = newCost.toFixed(2);
      this.setState({ rate: projectRate });
      this.setState({ cost: dollarCost });
    }

    if (this.state.timeType === 'minutes') {
      let rate = this.state.rate;
      let time = this.state.time;
      let cost = rate * time / 60;
      let dollarCost = cost.toFixed(2);
      this.setState({ cost: dollarCost });
    }

  }


  //Handles changes betwween hours and minutes
  timeTypeChange = (event) => {
    this.setState({ timeType: event.target.value });

    if (event.target.value === 'minutes') {
      let theTime = this.state.time;
      let convertTime = theTime * 60;

      let theRate = this.state.rate;
      let newCost = ((convertTime / 60) * theRate);
      let dollarCost = newCost.toFixed(2);
      this.setState({ time: convertTime });
      this.setState({ cost: dollarCost });

    } else if (event.target.value === 'hours') {
      let theTime = this.state.time;
      let convertTime = theTime / 60;
      this.setState({ time: convertTime });
    }

    if (event.target.value === 'minutes') {
      let newType = 'How many minutes?';
      this.setState({ howMany: newType });
    } else if (event.target.value === 'hours') {
      let hourType = 'How many hours?';
      this.setState({ howMany: hourType });
    }

  }

  //handles actions in the cost input
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

  //Rounds minutes 
  roundChange = () => {
    if (this.state.timeType === 'minutes') {
      let time = this.state.time;
      let newTime = (Math.round(time / 15) * 15);
      let rate = this.state.rate;
      let newCost = (newTime / 60) * rate;
      let dollarCost = newCost.toFixed(2);
      this.setState({ time: newTime });
      this.setState({ cost: dollarCost });

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

          <TimeType
            minutes={this.state.minute}
            hours={this.state.hour}
            timeType={this.state.timeType}
            change={this.timeTypeChange} />
          <Time
            className="time-input"
            time={this.state.time}
            handleTimeChange={this.handleTimeInputChange}
            howMany={this.state.howMany} />

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

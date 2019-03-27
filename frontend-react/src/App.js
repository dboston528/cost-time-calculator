import React, { Component } from 'react';
import './App.css';
import WorkType from './components/WorkType';
import Time from './components/Time';
import TimeType from './components/TimeType';
import Cost from './components/Cost';
import RoundUp from './components/RoundUp';
import RoundDown from './components/RoundDown';

class App extends Component {
  render() {
    return (
      <div className="body">
        <div className="Form">
          <header>
            <h1 className="heading">Cost/Time Calculator</h1>
          </header>
          <WorkType />
          <div className="time-block">
            <Time className="time-input" />
            <TimeType />
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

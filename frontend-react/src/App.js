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
      <div className="App">
        <header >
          <h1>Cost/Time Calculator</h1>
        </header>
        <WorkType />
        <Time />
        <TimeType />
        <Cost />
        <RoundUp />
        <RoundDown />
      </div>
    );
  }
}

export default App;

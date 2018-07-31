import React, { Component } from 'react';
import ShowSplits from './ShowSplits';

class Timer extends Component {

  state = {
      active: false,
      elapsedTime: 0,
      splits: [],
      currentSplit: 0
    };



    handleClick = () => {
        if (this.state.elapsedTime === 0 || this.state.currentSplit === this.state.elapsedTime) {
          const startTime = Date.now() - this.state.elapsedTime;
          this.timer = setInterval(() => {
            this.setState({ elapsedTime: Date.now() - startTime, active: true });
          });
        } else {
          this.setState({
            splits: [...this.state.splits, this.state.elapsedTime]
          })
        }
    };

    updateSplit = (time) => {
      clearInterval(this.timer);
      const test = this.state.splits.filter(data => data <= time)
      this.setState({ active: false, elapsedTime: time, splits: test, currentSplit: time});
    }

    render() {
      const { active, elapsedTime } = this.state;
      return (
        <div className='container'>
          <h1>{elapsedTime} milliseconds</h1>
          <button onClick={this.handleClick}>{active ? 'Split' : 'Start Timer'}</button>
              <ul>
              {this.state.splits.map(time =>
                <ShowSplits
                  time={time}
                  currentSplit={this.state.currentSplit}
                  updateSplit={this.updateSplit}
                />)}
              </ul>
        </div>
      );
    }
}

export default Timer;

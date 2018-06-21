import React, { Component } from 'react';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(),
    			  minutes: 0
    			 }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      60000		// 1 minute interval
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
      minutes: this.state.minutes + 1
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.minutes} min ago  &emsp; | &emsp; <i>{this.props.id}</i></h2>
      </div>
    );
  }
}


export default Time;
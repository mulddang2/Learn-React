import React from 'react';

class ClassClock extends React.Component {
  constructor(props) {
    console.log('constructor');

    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log('componentDidMount');

    this.timerID = setInterval(() => this.tick(), 30000);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');

    clearInterval(this.timerID);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  
  tick() {
    console.log('tick');

    this.setState({
      date: new Date(),
    });
  }

  render() {
    console.log('render');

    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default ClassClock;

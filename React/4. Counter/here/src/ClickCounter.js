import React, { Component } from 'react';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 }, () => {
      console.log(`Button clicked ${this.state.count} times`);
    });
  };

  render() {
    return (
      <div>
        <h2>Button Click Counter</h2>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default ClickCounter;

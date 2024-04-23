import React, { Component } from 'react';

class MountingPhaseComponent1 extends Component {
  constructor(props) {
    super(props);
    console.log('MountingPhaseComponent1 - constructor');
  }

  componentDidMount() {
    console.log('MountingPhaseComponent1 - componentDidMount');
  }

  render() {
    console.log('MountingPhaseComponent1 - render');
    return <div>Mounting Phase Component 1</div>;
  }
}

export default MountingPhaseComponent1;

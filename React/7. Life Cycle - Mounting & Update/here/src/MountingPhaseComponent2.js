import React, { Component } from 'react';

class MountingPhaseComponent2 extends Component {
  constructor(props) {
    super(props);
    console.log('MountingPhaseComponent2 - constructor');
  }

  componentDidMount() {
    console.log('MountingPhaseComponent2 - componentDidMount');
  }

  render() {
    console.log('MountingPhaseComponent2 - render');
    return <div>Mounting Phase Component 2</div>;
  }
}

export default MountingPhaseComponent2;

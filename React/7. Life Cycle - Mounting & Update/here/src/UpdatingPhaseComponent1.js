import React, { Component } from 'react';

class UpdatingPhaseComponent1 extends Component {
  constructor(props) {
    super(props);
    console.log('UpdatingPhaseComponent1 - constructor');
  }

  componentDidUpdate() {
    console.log('UpdatingPhaseComponent1 - componentDidUpdate');
  }

  render() {
    console.log('UpdatingPhaseComponent1 - render');
    return <div>Updating Phase Component 1</div>;
  }
}

export default UpdatingPhaseComponent1;

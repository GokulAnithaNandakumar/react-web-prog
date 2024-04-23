import React, { Component } from 'react';

class UpdatingPhaseComponent2 extends Component {
  constructor(props) {
    super(props);
    console.log('UpdatingPhaseComponent2 - constructor');
  }

  componentDidUpdate() {
    console.log('UpdatingPhaseComponent2 - componentDidUpdate');
  }

  render() {
    console.log('UpdatingPhaseComponent2 - render');
    return <div>Updating Phase Component 2</div>;
  }
}

export default UpdatingPhaseComponent2;

import React from 'react';
import MountingPhaseComponent1 from './MountingPhaseComponent1';
import MountingPhaseComponent2 from './MountingPhaseComponent2';
import UpdatingPhaseComponent1 from './UpdatingPhaseComponent1';
import UpdatingPhaseComponent2 from './UpdatingPhaseComponent2';

function App() {
  return (
    <div className="App">
      <h1>Mounting Phase Components:</h1>
      <MountingPhaseComponent1 />
      <MountingPhaseComponent2 />
      <h1>Updating Phase Components:</h1>
      <UpdatingPhaseComponent1 />
      <UpdatingPhaseComponent2 />
    </div>
  );
}

export default App;

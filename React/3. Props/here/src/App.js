import React from 'react';
import CustomComponent from './CustomComponent';

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <CustomComponent prop1="Value 1" prop2="Value 2" prop3="Value 3">
        <p>This is a child element.</p>
        <button>Click me</button>
      </CustomComponent>
    </div>
  );
};

export default App;

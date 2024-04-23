import React from 'react';

const CustomComponent = ({ prop1, prop2, prop3, children }) => {
  return (
    <div>
      <h2>Property 1: {prop1}</h2>
      <p>Property 2: {prop2}</p>
      <p>Property 3: {prop3}</p>
      <div>
        {children}
      </div>
    </div>
  );
};

export default CustomComponent;

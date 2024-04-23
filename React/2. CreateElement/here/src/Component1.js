import React from 'react';

const Component1 = () => {
  // Create the element structure using createElement
  const imgElement = React.createElement('img', { src: require('./images.jpeg').default, alt: 'fruits' });
  const pElement = React.createElement('p', null, 'Fruits are good for health.', imgElement);
  const divElement = React.createElement('div', null, pElement);

  // Render the element
  return divElement;
}

export default Component1;

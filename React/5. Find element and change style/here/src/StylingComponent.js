import React, { Component } from 'react';

class StylingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      fontStyle: '',
      fontSize: ''
    };
  }

  handleColorChange = () => {
    this.setState({ color: 'blue' });
  };

  handleFontStyleChange = () => {
    this.setState({ fontStyle: 'italic' });
  };

  handleFontSizeChange = () => {
    this.setState({ fontSize: '70px' });
  };

  render() {
    const { color, fontStyle, fontSize } = this.state;

    return (
      <div>
        <h2 style={{ color }}>Change Color</h2>
        <button onClick={this.handleColorChange}>Change Color</button>

        <h2 style={{ fontStyle }}>Change Font Style</h2>
        <button onClick={this.handleFontStyleChange}>Change Font Style</button>

        <h2 style={{ fontSize }}>Change Font Size</h2>
        <button onClick={this.handleFontSizeChange}>Change Font Size</button>
      </div>
    );
  }
}

export default StylingComponent;

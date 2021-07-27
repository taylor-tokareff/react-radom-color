import React, { Component } from 'react';

export default class ColorRandomizer extends Component {
  state = {
    selectedColor: 'green'
  }

  handleColorChange = color => {
    this.setState({ selectedColor: color });
  }

  render() {
    const colors = ['green', 'pink', 'orange'];
    const { selectedColor } = this.state;
    return (
      <>
        {
          colors.map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color }}
              onClick={() => this.handleColorChange(color)}>
              {color}</button>
          ))
        }



        <div
          style={{
            backgroundColor: selectedColor,
            width: '100px',
            height: '100px'
          }}
        ></div>
      </>
    );
  }
}


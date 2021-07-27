import React, { Component } from 'react';

export default class ColorRandomizer extends Component {
  state = {
    selectedColor: 'green'
  }

  render() {
    const colors = ['green', 'pink', 'orange'];
    return (
      <>
        {
          colors.map((color) => (
            <button key={color} style={{ backgroundColor: color }}>
              {color}</button>
          ))
        }



        <div
          style={{
            backgroundColor: this.state.selectedColor,
            width: '100px',
            height: '100px'
          }}
        ></div>
      </>
    );
  }
}


import React, { Component } from 'react';

export default class ColorRandomizer extends Component {
  render() {
    const colors = ['green', 'pink', 'orange'];
    return (
      <>
        {
          colors.map((color) => (
            <button key={color}>{color}</button>
          ))}
      </>
    );
  }
}

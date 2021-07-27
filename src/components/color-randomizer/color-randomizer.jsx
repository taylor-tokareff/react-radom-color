import React, { Component } from 'react';

export default class ColorRandomizer extends Component {
  state = {
    selectedColor: 'green'
  }

  handleColorChange = color => {
    this.setState({ selectedColor: color });
  }

  componentDidMount() {
    const colors = ['green', 'pink', 'orange'];

    setInterval(() => {
      const random = colors[Math.floor(Math.random() * colors.length)];
      this.setState({ selectedColor: random });
    },
      1000
    );
  }


  render() {
    return (
      <>




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


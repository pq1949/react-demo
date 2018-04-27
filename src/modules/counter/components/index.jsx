import React, { Component } from 'react';

class Counter extends Component {
  render () {
    const { text, onIncreaseClick, onDecreaseClick } = this.props
    return (
      <div>
        <span>{text}</span><br />
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onDecreaseClick}>Decrease</button>
      </div>
    )
  }
}

export default Counter;

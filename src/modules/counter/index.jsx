import { connect } from 'react-redux'
import React, { Component } from 'react';

// @connect(state => ({
//   text:state.count
// }),dispatch=>({
//   onIncreaseClick: () => dispatch({ type: 'increase' }),
//   onDecreaseClick: () => dispatch({ type: 'decrease' })
// }))
class Counter extends Component {
  render () {
    console.log(this)
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

const App = connect(state => ({
  text: state.count
}), dispatch => ({
  onIncreaseClick: () => dispatch({ type: 'increase' }),
  onDecreaseClick: () => dispatch({ type: 'decrease' })
}))(Counter)

export default App;

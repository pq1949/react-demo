import { connect } from 'react-redux'
import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import * as actonCreators from './actions'
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



// 也可以这样写
// const App = connect(state => ({
//   text: state.count
// }), {
//     onIncreaseClick: () => ({
//       type: 'increase'
//     }),
//     onDecreaseClick: () => ({
//       type: 'decrease'
//     })
//   })(Counter)

// mapStateToProps必须是function,作为输入逻辑，
// mapDispatchToProps可以是funciton,也可以是对象，作为输出，

//  [mapStateToProps(state, [ownProps]): stateProps] (Function) :
// 如果定义该参数，组件将会监听 Redux store 的变化。任何时候，只要 Redux store 发生改变，
// mapStateToProps 函数就会被调用。该回调函数必须返回一个纯对象，这个对象会与组件的 props
// 合并。如果你省略了这个参数，你的组件将不会监听 Redux store。如果指定了该回调函数中的第二个参数
//  ownProps，则该参数的值为传递到组件的 props，而且只要组件接收到新的 props，mapStateToProps 也会被调用。


// [mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function) :
// 如果传递的是一个对象，那么每个定义在该对象的函数都将被当作 Redux action creator，而且这个
// 对象会与 Redux store 绑定在一起，其中所定义的方法名将作为属性名，合并到组件的 props 中。
// 如果传递的是一个函数，该函数将接收一个 dispatch 函数，然后由你来决定如何返回一个对象，
// 这个对象通过 dispatch 函数与 action creator 以某种方式绑定在一起（提示：你也许会用到 Redux
// 的辅助函数 bindActionCreators() ）。如果你省略这个 mapDispatchToProps 参数，默认情况下，
// dispatch 会注入到你的组件 props 中。如果指定了该回调函数中第二个参数 ownProps，该参数的值为
// 传递到组件的 props，而且只要组件接收到新 props，mapDispatchToProps 也会被调用。

// 如果你省略这个 mapDispatchToProps 参数  那么上面的调用方法可以写成下面的样子
// <button onClick={()=>{this.props.dispatch({type:'increase'})}}>Increase</button>
// <button onClick={()=>{this.props.dispatch({type:'decrease'})}}>Decrease</button>


// 这种写法也可以  顺便也用了下bindActionCreators这个复制函数
// function bindActionCreators(actionCreators, dispatch) 这个函数的第一个参数actionCreators必须是一个函数 并且返回的action  object必须通过return返回
// actionCreators 有输入输出，所以必须是个函数
// const App = connect(state => ({
//   text: state.count
// }), dispatch => {
//   return {
//     onIncreaseClick: () => dispatch({ type: 'increase' }),
//     onDecreaseClick:  bindActionCreators(() => ({ type: 'decrease' }), dispatch)
//   }
// })(Counter)



const App = connect(state => ({
  text: state.count
}), actonCreators)(Counter)


export default App;

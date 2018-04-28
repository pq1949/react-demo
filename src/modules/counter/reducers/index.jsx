import * as actionTypes from '../constants'
import { handleActions } from 'redux-actions'

//原始写法
// export default function (state = {
//   count: 0
// }, action) {
//   switch (action.type) {
//     case actionTypes.DECREASE:
//       return {
//         count: state.count + 1
//       }
//     case actionTypes.INCREASE:
//       return {
//         count: state.count - 1
//       }
//     default:
//       return state
//   }
// }
// export default handleAction(actionTypes.DECREASE, (state) => ({ count: state.count - 1 }), { count: 0 })
// export default handleAction(actionTypes.DECREASE, (state) => ({ count: state.count - 1 }), { count: 0 })

export default handleActions({
  [actionTypes.INCREASE]: (state, action) => ({ count: state.count + 1 }),
  [actionTypes.DECREASE]: (state, action) => ({ count: state.count - 1 })
}, { count: -2 })

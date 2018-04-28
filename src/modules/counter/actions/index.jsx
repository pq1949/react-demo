import { createActions } from 'redux-actions'
import * as actionTypes from '../constants'

// export const onIncreaseClick = createAction(actionTypes.INCREASE)
// export const onDecreaseClick = createAction(actionTypes.DECREASE)



// createActions 这个方法没搞清楚怎么用。。还是用上面的吧
 // https://redux-actions.js.org/api-reference/createaction-s#createactions
const actions = createActions(
  {
    // function form; payload creator defined inline
    [actionTypes.INCREASE]: () => { },

    [actionTypes.DECREASE]: () => { }

  }
);

export default {
  onIncreaseClick: actions[actionTypes.INCREASE],
  onDecreaseClick: actions[actionTypes.DECREASE]
}

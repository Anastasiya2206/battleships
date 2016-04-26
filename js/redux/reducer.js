import defaultState from './state.js';
import {START_POSITIONING, END_POSITIONING, startPositioning, endPositioning} from './actions/positioning.js';

let battleshipApp = (state = defaultState, action) => {
  switch(state.type) {
    case START_POSITIONING:
      return Object.assign({}, state, {
        gameInPositioning: true
      })
    default:
      return defaultState;
  }
}

module.exports = battleshipApp;

import defaultState from './state.js';
import { startPositioning, endPositioning } from './actions.js';

const battleshipApp = (state = defaultState, action) => {
  switch(action.type) {
    case 'START_POSITIONING':
      return Object.assign({}, state, { currentSelectedBattleShip: action.battleshipType})
    case 'START_GAME':
      return Object.assign({}, state, {
        gameStarted: true
      })
    case 'END_GAME':
      return Object.assign({}, state, {
        gameOver: true
      })
    default:
      return defaultState;
  }
}

module.exports = battleshipApp;

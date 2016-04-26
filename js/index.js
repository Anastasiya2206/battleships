import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Board from './components/board.js';
import Drawer from './components/drawer.js';
import battleshipApp from './redux/reducer.js';
import defaultState from './redux/state.js';
import {startPositioning, endPositioning} from './redux/actions/positioning.js';

const store = createStore(battleshipApp);
console.log(store.getState());
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch(startPositioning(2));
unsubscribe();

class App extends React.Component {
  constructor(data) {
    super(data);
  }

  render() {
    let player1 = 'player1';
    let player2 = 'Ze AI';

    return (
      <div>
      <div className='col-lg-6'>
        <Board player={player1}/>
        <Drawer player={player1}/>
      </div>
      <div className='col-lg-6'>
        <Board player={player2}/>
      </div>
      </div>
    )
  }
}
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);

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
/*const Test = ({tester}) => {
  return <h1>{tester}</h1>;
}
*/
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
        <Board player={player1} store={store}/>
        <Drawer player={player1} store={store}/>
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

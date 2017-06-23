import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import Board from './components/board.js';
import Drawer from './components/drawer.js';
import Provider from './components/provider.js'
import battleshipApp from './redux/reducer.js';
import { startPositioning, endPositioning } from './redux/actions/positioning.js';

import io from 'socket.io-client';
const socket = io('http://localhost:5000')
let queryParams = location.search.split("?").pop()
if(queryParams != ''){
  let userParam = queryParams
    .split('&')
    .map((value) => value.split("="))
    .filter((arr) => arr[0] == 'user')[0]

  if(userParam){
    socket.emit('user joined', userParam.pop())
  }
}

const store = createStore(battleshipApp);

class App extends React.Component {
  constructor(data) {
    super(data);
  }

  componentDidMount() {
    const { store } = this.context;
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
App.contextTypes = {
  store: React.PropTypes.object
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);

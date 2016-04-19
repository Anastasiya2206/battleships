import React from 'react';
import ReactDom from 'react-dom';
import CONFIG from '../../config/config.js'

export default class Drawer extends React.Component {
  constructor(data) {
    super(data);
    this.state = { battleshipsCount: CONFIG.get('battleshipCount'),
                   battleshipsUsed: 0 };
  }

  render() {
    return <div className='battleship-drawer'>
      <div>Battleship 1</div>
      <div>Battleship 2</div>
      <div>Battleship 3</div>
      <div>Battleship 4</div>
      <div>Battleship 5</div>
    </div>
  }
}

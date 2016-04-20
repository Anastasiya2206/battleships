import React from 'react';
import ReactDom from 'react-dom';
import range from '../helpers/functions.js';
import CONFIG from '../../config/config.js';

export default class Drawer extends React.Component {
  constructor(data) {
    super(data);
    this.state = { battleshipsCount: CONFIG.get('battleshipCount'),
                   battleshipsUsed: 0 };
  }

  render() {
    return <div className='battleship-drawer'>
      {range(this.state.battleshipsCount).map((index) => {
        return <div className='battleship'>Battleship {index}</div>;
      })}
    </div>
  }
}

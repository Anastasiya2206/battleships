import React from 'react';
import ReactDom from 'react-dom';
import range from '../helpers/functions.js';
import CONFIG from '../../config/config.js';

export default class Drawer extends React.Component {
  constructor(data) {
    super(data);
    this.state = { battleshipTypes: CONFIG.get('battleshipTypes'),
                   battleshipsUsed: 0 };
  }

  displayBattleships() {
    let display = [];
    let obj = this.state.battleshipTypes;
    Object.keys(this.state.battleshipTypes).forEach((key) => {
      display.push(<div className={key} key={obj[key]}>{key.toUpperCase()} Battleship</div>);
    });
    return display;
  }

  render() {
    let obj = this.state.battleshipTypes;

    return (
      <div className='battleship-drawer'>
        <b>Available Battleships:</b>
        { this.displayBattleships() }
      </div>
    )
  }
}

import React from 'react';
import ReactDom from 'react-dom';
import range from '../helpers/functions.js';
import CONFIG from '../../config/config.js';
import Battleship from './battleship.js';

export default class Drawer extends React.Component {
  constructor(data) {
    super(data);
    this.state = { battleshipTypes: CONFIG.get('battleshipTypes'),
                   battleshipsUsed: 0 };
  }

  componentDidMount() {
    const { store } = this.context;
  }

  onDragStart(event) {
    console.log('dragg');
    console.log(event.target);
  }

  displayBattleships() {
    let display = [];
    let obj = this.state.battleshipTypes;
    Object.keys(this.state.battleshipTypes).forEach((key) => {
      display.push(<Battleship type={key} key={key} store={this.store}/>);
    });
    return display;
  }

  render() {
    let obj = this.state.battleshipTypes;
    let store = this.context;

    console.log(store);

    return (
      <div className='battleship-drawer'>
        <b>Available Battleships:</b>
        { this.displayBattleships() }
      </div>
    )
  }
}

import React from 'react';
import ReactDom from 'react-dom';
import range from '../helpers/functions.js';
import CONFIG from '../../config/config.js';

export default class Battleship extends React.Component {
  constructor(data) {
    super(data);
  }

  onDragStart(event) {
    console.log('dragg');
    console.log(event.target);
  }

  render() {
    return <div className={this.props.type} draggable={true} onDragStart={this.onDragStart}>
            {this.props.type}
           </div>
  }
}

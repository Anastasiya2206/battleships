import React from 'react';
import ReactDom from 'react-dom';
import range from '../helpers/functions.js';
import CONFIG from '../../config/config.js';

export default class Battleship extends React.Component {
  constructor(data) {
    super(data);
    this.state = { deployed: false, selected: false }
  }

  onDragStart(event) {
    event.dataTransfer.setData('ship', event.target.id);
  }

  onClick(e) {
    console.log('clicked');
    this.setState({ selected: true })
  }

  render() {
    return <div className={this.props.type} id={this.props.type} onClick={this.onClick.bind(this)}>
            {this.props.type}
           </div>
  }
}

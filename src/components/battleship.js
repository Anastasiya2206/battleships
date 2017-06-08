import React from 'react';
import ReactDom from 'react-dom';
import range from '../helpers/functions.js';
import CONFIG from '../../config/config.js';

import { createStore } from 'redux';
import battleshipApp from '../redux/reducer.js';
import { startPositioning, endPositioning } from '../redux/actions/positioning.js';

export default class Battleship extends React.Component {

  constructor(data) {
    super(data);
    this.state = { deployed: false, selected: false }
  }

  componentDidMount() {
    const { store } = this.context;
  }

  onDragStart(event) {
    event.dataTransfer.setData('ship', event.target.id);
  }

  onClick(e) {
    this.setState({ selected: true });
    this.store.dispatch(startPositioning(this.props.type));
  }

  render() {
    let { store } = this.context;

    return <div className={this.props.type} id={this.props.type}>
              {this.props.type}
           </div>
  }
}
Battleship.contextTypes = {
  store: React.PropTypes.object
}

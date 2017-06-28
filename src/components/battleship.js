import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types'
import range from '../helpers/functions.js';
import CONFIG from '../../config/config.js';

import { createStore } from 'redux';
import battleshipApp from '../redux/reducer.js';
import { startPositioning, endPositioning } from '../redux/actions/positioning.js';

export default class Battleship extends React.Component {

  constructor(data) {
    super(data);
    this.state = {
      deployed: false,
      selected: false,
      size: null,
      coordinates: []
    }
  }

  componentDidMount() {
  }

  onDragStart(event) {
    event.dataTransfer.setData('ship', event.target.id);
  }

  onClick(e) {
    this.setState({ selected: true });
  }

  render() {
    let { store } = this.context;

    return <div className={this.props.type} id={this.props.type} onDrag={(e) => this.onDragStart(e)} onClick={(e) => this.onClick(e)}>
              {this.props.type}
           </div>
  }
}

Battleship.propTypes = {
  type: PropTypes.string
}

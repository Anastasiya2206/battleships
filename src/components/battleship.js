import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd';
import range from '../helpers/functions.js';
import { ItemTypes } from '../helpers/constants.js';
import CONFIG from '../../config/config.js';

import { createStore } from 'redux';
import battleshipApp from '../redux/reducer.js';
import { startPositioning, endPositioning } from '../redux/actions/positioning.js';

const BattleshipSource = {
  beginDrag(props) {
    return {};
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Battleship extends React.Component {

  constructor(data) {
    super(data);
    this.state = {
      deployed: false,
      selected: false,
      size: null,
      coordinates: []
    }
  }

  onDragStart(event) {
    event.dataTransfer.setData('ship', event.target.id);
  }

  onClick(e) {
    this.setState({ selected: true });
  }

  render() {
    const { connectDragSource, isDragging } = this.props;
    let { store } = this.context;

    return connectDragSource(
      <div className={this.props.type} id={this.props.type} onDrag={(e) => this.onDragStart(e)} onClick={(e) => this.onClick(e)}>
        {this.props.type}
      </div>
    )
  }
}

Battleship.propTypes = {
  type: PropTypes.string,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
}

export default DragSource(ItemTypes.BATTLESHIP, BattleshipSource, collect)(Battleship);

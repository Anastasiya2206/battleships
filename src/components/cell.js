import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../helpers/constants.js';

const cellTarget = {
  drop(props) {
    console.log(props);
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const Cell = ({ connectDropTarget, index, x, y }) => {
  return connectDropTarget(<div className='cell-grid' key={index} x={x} y={y}></div>)
}

Cell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
}
export default DropTarget(ItemTypes.BATTLESHIP, cellTarget, collect)(Cell);

import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../helpers/constants.js';

const Cell = ({ connectDropTarget, index, x, y }) => {
  return <div className='cell-grid' key={index} x={x} y={y}></div>
}

Cell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default Cell;

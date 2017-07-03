import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux';
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
      coordinates: []
    }
  }

  render() {
    const { connectDragSource, isDragging, onBattleshipClick } = this.props;
    let { store } = this.context;

    return connectDragSource(
      <div className={this.props.type} id={this.props.type} onClick={(e) => onBattleshipClick(e)}>
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

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBattleshipClick: (e) => {
      dispatch(startPositioning(e.target.getAttribute('id')))
    }
  }
}
Battleship = connect(mapStateToProps, mapDispatchToProps)(Battleship);
export default DragSource(ItemTypes.BATTLESHIP, BattleshipSource, collect)(Battleship);

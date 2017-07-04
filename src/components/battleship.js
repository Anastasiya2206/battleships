import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import range from '../helpers/functions.js';
import { ItemTypes } from '../helpers/constants.js';
import CONFIG from '../../config/config.js';

import battleshipApp from '../redux/reducer.js';
import { startPositioning, endPositioning } from '../redux/actions/positioning.js';

class Battleship extends React.Component {

  constructor(data) {
    super(data);
    this.state = {
      deployed: false,
      coordinates: []
    }
  }

  render() {
    const { onBattleshipClick } = this.props;

    return (
      <div className={this.props.type} id={this.props.type} onClick={(e) => onBattleshipClick(e)}>
        {this.props.type}
      </div>
    )
  }
}

Battleship.propTypes = {
  type: PropTypes.string,
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
export default connect(mapStateToProps, mapDispatchToProps)(Battleship);

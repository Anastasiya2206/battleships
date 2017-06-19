import React from 'react';
export default class Provider extends React.Component {

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  static childContextTypes() {
    return {
      store: React.PropTypes.object
    }
  }

  render() {
    return this.props.children;
  }
}
Provider.childContextTypes = {
  store: React.PropTypes.object
}

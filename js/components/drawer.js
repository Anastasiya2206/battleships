import React from 'react';
import ReactDom from 'react-dom';
import CONFIG from '../../config/config.js'

export default class Drawer extends React.Component {
  constructor(data) {
    super(data);
    console.log(CONFIG);
    this.state = {battleshipsCount: CONFIG.get('battleshipCount')};
  }

  render() {
    return null;
  }
}

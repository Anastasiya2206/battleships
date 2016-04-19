import CONFIG from '../config/config.js'

export default class Battleship {
  constructor(data) {
    // Size in table columns
    this.size = data.get('size');
    this.type = data.get('type');
  }
}

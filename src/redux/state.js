const defaultState = {
  gameStarted: false,
  gameOver: false,
  battleShips: {
    tiny:   { position: [null, null] },
    small:  { position: [null, null] },
    normal: { position: [null, null] },
    big:    { position: [null, null] },
    huge:   { position: [null, null] },
  },
  currentSelectedBattleShip: null,
}

module.exports = defaultState;

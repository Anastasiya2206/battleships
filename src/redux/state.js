const defaultState = {
  gameStarted: false,
  gameOver: false,
  playersCount: 0,
  players: {
    byId: {
      'player1': {
        id: 'player1',
        name: null,
        battleShips: {
          byType: {
            tiny:   { position: [null, null] },
            small:  { position: [null, null] },
            normal: { position: [null, null] },
            big:    { position: [null, null] },
            huge:   { position: [null, null] }
          }
        }
      },
      'player2': {
        id: 'player2',
        name: null,
        battleShips: {
          byType: {
            tiny:   { position: [null, null] },
            small:  { position: [null, null] },
            normal: { position: [null, null] },
            big:    { position: [null, null] },
            huge:   { position: [null, null] }
          }
        }
      }
    }
  },
  currentSelectedBattleShip: null,
}

module.exports = defaultState;

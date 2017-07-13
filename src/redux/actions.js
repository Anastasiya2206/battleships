export const startPositioning = (type) => {
  return { type: 'START_POSITIONING', battleshipType: type };
}

export const gameStarted = () => {
  return { type: 'GAME_STARTED' };
}

export const gameOver = () => {
  return { type: 'GAME_OVER' };
}

export const endPositioning = (type) => {
  return { type: 'END_POSITIONING', battleshipType: type };
}

export const updateBattleshipPosition = (playerId, type, position) => {
  const dataInfo = {
    players: {
      byId: {
        [playerId]: {
          battleShips: {
            byType: {
              [type] : { position: position }
            }
          }
        }
      }
    }
  }
  return {
    type: 'UPDATE_POSITION', data: dataInfo
  }
}

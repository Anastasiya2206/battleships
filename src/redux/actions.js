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

export const updateBattleshipPosition = (type) => {
  return {}
}

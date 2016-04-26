export const START_POSITIONING = 'START_POSITIONING';
export const END_POSITIONING = 'END_POSITIONING';

export const startPositioning = (battleship) => {
  return { type: START_POSITIONING, battleship };
}

export const endPositioning = (battleship) => {
  return { type: END_POSITIONING, battleship };
}

/*module.exports = {
  startPositioning: startPositioning,
  endPositioning: endPositioning
}*/

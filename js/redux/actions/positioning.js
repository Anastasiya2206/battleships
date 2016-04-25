const START_POSITIONING = 'START_POSITIONING';
const END_POSITIONING = 'END_POSITIONING';

const startPositioning = (battleship) => {
  return { type: START_POSITIONING, battleship };
}

const endPositioning = (battleship) => {
  return { type: END_POSITIONING, battleship };
}

module.exports = {
  startPositioning: startPositioning,
  endPositioning: endPositioning
}

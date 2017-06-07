export const START_POSITIONING = 'START_POSITIONING';
export const END_POSITIONING = 'END_POSITIONING';
export const END_GAME = 'END_GAME';

export const startPositioning = (id) => {
  return { type: START_POSITIONING, battleshipId: id };
}

export const endPositioning = (id) => {
  return { type: END_POSITIONING, battleshipId: id };
}

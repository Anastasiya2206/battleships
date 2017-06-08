export const startPositioning = (id) => {
  return { type: 'START_POSITIONING', battleshipId: id };
}

export const endPositioning = (id) => {
  return { type: 'END_POSITIONING', battleshipId: id };
}

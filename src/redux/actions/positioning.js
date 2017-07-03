export const startPositioning = (type) => {
  return { type: 'START_POSITIONING', battleshipType: type };
}

export const endPositioning = (type) => {
  return { type: 'END_POSITIONING', battleshipType: type };
}

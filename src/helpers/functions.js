let range = (total) => {
  return Array.apply(0, Array(total)).map((el, index) => index );
}

module.exports = range;

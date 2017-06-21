const CONFIG = new Map();
CONFIG.set('battleshipTypes', {
  'tiny': 1,
  'small': 2,
  'normal': 3,
  'big': 4,
  'huge': 5
})
CONFIG.set('devPort', '4000');
CONFIG.set('socketPort', '5000');

module.exports = CONFIG;

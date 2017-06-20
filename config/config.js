const CONFIG = new Map();
CONFIG.set('battleshipTypes', {
  'tiny': 1,
  'small': 2,
  'normal': 3,
  'big': 4,
  'huge': 5
})
CONFIG.set('socketHost', '127.0.0.1:9876');
CONFIG.set('devPort', '4000');

module.exports = CONFIG;

const crypto = require('crypto');

module.exports = function generateUniqueId() {
  return crypto.randomBytes(4).toString('HEX'); //conjunto aleatório de quatro bytes hexadecimais
}
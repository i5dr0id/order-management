const jwt = require('jsonwebtoken');
const SECRET_KEY = 'dev-key-124';

module.exports = {

  issuer (payload, expiresIn) {
    return jwt.sign(payload, SECRET_KEY, {
      expiresIn
    });
  },

  verify (token) {
    return jwt.verify(token, SECRET_KEY);
  }

};

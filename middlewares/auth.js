const NotAllowed = require('../errors/NOT_ALLOWED');
const dotenv = require('dotenv');
dotenv.config();

const { ADMIN_KEY } = process.env;

const auth = (req, res, next) => {
  const { adminkey } = req.headers;

  if (adminkey && adminkey === ADMIN_KEY) {
    next();
  } else {
    next(new NotAllowed('Não Autorizado'));
  }
};

module.exports = auth;

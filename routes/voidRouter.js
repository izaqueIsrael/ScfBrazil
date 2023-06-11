const express = require('express');
const NotFound = require('../errors/NOT_FOUND')

const voidRouter = express.Router();

voidRouter.all('/', (req, res, next) => {
  next(new NotFound('A solicitação não foi encontrada'));
});

module.exports = voidRouter;

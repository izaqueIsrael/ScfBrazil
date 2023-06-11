const userData = require('../fakeData');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const ServerError = require('../errors/SERVER_ERROR.js');
const NotFound = require('../errors/NOT_FOUND');
const { v4: uuidv4 } = require('uuid');

const getUser = (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = userData.find((user) => user.id === userId);

    if (user) {
      user.consultedCount++;
      res.status(201).send({ user });
    } else {
      next(new NotFound('Id de usuário não encontrado'));
    }
  } catch (error) {
    next(new ServerError('Erro no servidor'));
  }
};

const getUsers = (req, res, next) => {
  try {
    res.status(201).send({ userData });
  } catch {
    next(new ServerError('Error no servidor'));
  }
};

const createUser = (req, res, next) => {
  try {
    const { name, job } = req.body;

    const newUser = {
      id: uuidv4(),
      name: name,
      job: job,
      consultedCount: 0,
    };

    if (newUser) {
      userData.push(newUser);
      res.status(201).send(newUser);
    } else {
      next(new NotFound('Informações não encontradas'));
    }

  } catch (error) {
    next(new ServerError('Error no servidor'));
  }
};

const deleteUser = (req, res, next) => {
  try {
    const userId = req.params.userId;
    const index = userData.findIndex((user) => user.id === userId);

    if (index !== -1) {
      userData.splice(index, 1);
      res.status(201).send('Usuário deletado com sucesso');
    } else {
      next(new NotFound('Id de usuário não encontrado'));
    }
  } catch (error) {
    next(new ServerError('Error no servidor'));
  }
};

const updateUserInfo = (req, res, next) => {
  try {
    const { name, job, id } = req.body;
    const index = userData.findIndex((user) => user.id === id);

    if (index !== -1) {
      userData[index].name = name;
      userData[index].job = job;
      res.status(201).send('Informações do usuário atualizadas com sucesso');
    } else {
      next(new NotFound('Id de usuário não encontrado'));
    }
  } catch (error) {
    next(new ServerError('Error no servidor'));
  }
};

const checkUserQuery = (req, res, next) => {
  try {
    const { id } = req.body;
    const index = userData.findIndex((user) => user.id === id);

    if (index !== -1) {
      res.status(201).send(`O usuário ${userData[index].name} foi consultado ${userData[index].consultedCount} vez${userData[index].consultedCount !== 1 ? 'es' : ''}`);
    } else {
      next(new NotFound('Id de usuário não encontrado'));
    }
  } catch {
    next(new ServerError('Error no servidor'));
  }
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUserInfo,
  checkUserQuery,
  fakeData: userData,
};
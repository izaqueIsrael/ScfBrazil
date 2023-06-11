const express = require('express');
const userRouter = express.Router();
const auth = require('../middlewares/auth');

const {
  getUser,
  getUsers,
  deleteUser,
  createUser,
  checkUserQuery,
  updateUserInfo,
} = require('../controller/userController');

userRouter.get('/acess', auth, checkUserQuery);
userRouter.get('/', getUsers);
userRouter.get('/:userId', getUser);
userRouter.post('/', createUser);
userRouter.delete('/:userId', auth, deleteUser);
userRouter.patch('/', auth, updateUserInfo);

module.exports = userRouter;
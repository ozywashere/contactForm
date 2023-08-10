import express from 'express';
const router = express.Router();

import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controller/userController.js';

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

export default router;

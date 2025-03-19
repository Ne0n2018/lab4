import { Router } from 'express';

import User from './user.model.js';
import * as usersService from './user.service.js';

const router = Router();

router.route('/').get(async (req, res) => {
  try {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  } catch (error) {
    res.status(500).send({ message: 'Не удалось получить пользователей', error: error.message });
  }
});

router.route('/').post(async (req, res) => {
  try {
    const user = await usersService.createUser(req.body);
    res.status(201).json(User.toResponse(user));
  } catch (error) {
    res.status(400).send({ message: 'Ошибка при создании пользователя', error: error.message });
  }
});

router.route('/:id').get(async (req, res) => {
  try {
    const user = await usersService.getById(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'Пользователь не найден' });
    }
    return res.json(User.toResponse(user));
  } catch (error) {
    return res
      .status(500)
      .send({ message: 'Не удалось получить пользователя', error: error.message });
  }
});

router.route('/:id').put(async (req, res) => {
  try {
    const updatedUser = await usersService.updatedUserData(req.params.id, req.body);
    if (!updatedUser) {
      return res.status(404).send({ message: 'Пользователь не найден' });
    }
    return res.json(User.toResponse(updatedUser));
  } catch (error) {
    return res
      .status(500)
      .send({ message: 'Не удалось обновить пользователя', error: error.message });
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ message: `Пользователь с id ${id} удален` });
  } catch (error) {
    res.status(404).send({ message: 'Пользователь не найден', error: error.message });
  }
});

export default router;

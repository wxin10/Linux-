const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// 用户相关路由
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;

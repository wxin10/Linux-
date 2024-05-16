const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// 认证相关路由
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/user', authController.getUser); // 需要 JWT 验证中间件

module.exports = router;

const express = require('express');
const { connectDB, sequelize } = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const authRoutes = require('./routes/authRoutes');
const jwt = require('jsonwebtoken');
const config = require('./config/config');

const app = express();

// 连接数据库
connectDB();

// 同步数据库模型
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
});

// 初始化中间件
app.use(express.json({ extended: false }));

// JWT 验证中间件
const verifyToken = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ message: '没有授权令牌，访问被拒绝' });
  }
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: '令牌无效' });
  }
};

// 定义路由
app.use('/api/users', verifyToken, userRoutes);
app.use('/api/courses', verifyToken, courseRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

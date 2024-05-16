import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// 这个示例假设你有一个函数 `isAuthenticated` 用于检查用户是否已经登录
import { isAuthenticated } from '../../utils/auth'; // 根据你的项目结构调整导入路径

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default PrivateRoute;

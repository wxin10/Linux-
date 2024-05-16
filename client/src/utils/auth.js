// src/utils/auth.js

export const isAuthenticated = () => {
  // 假设认证状态存储在 localStorage 中
  const token = localStorage.getItem('authToken');
  return !!token; // 如果存在 token，返回 true；否则返回 false
};

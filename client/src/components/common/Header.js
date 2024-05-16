import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // 假设有一个CSS文件用于Header的样式

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">在线教育平台</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/courses">课程列表</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/student">学生仪表盘</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/teacher">教师仪表盘</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">登录</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">注册</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

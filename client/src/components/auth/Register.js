import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('两次输入的密码不匹配。');
      return;
    }
    // 这里是处理注册逻辑的地方，可以替换为实际的API调用
    if (email && password && name) {
      // 假设注册成功后，将token存储在localStorage中
      localStorage.setItem('authToken', 'your_token');
      navigate('/dashboard/student');
    } else {
      setError('注册失败，请检查您的信息。');
    }
  };

  return (
    <div style={styles.authContainer}>
      <h2 style={styles.title}>注册</h2>
      {error && <div style={styles.error}>{error}</div>}
      <form onSubmit={handleRegister}>
        <div style={styles.formGroup}>
          <label htmlFor="name">姓名</label>
          <input
            type="text"
            id="name"
            style={styles.formControl}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email">邮箱</label>
          <input
            type="email"
            id="email"
            style={styles.formControl}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password">密码</label>
          <input
            type="password"
            id="password"
            style={styles.formControl}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="confirmPassword">确认密码</label>
          <input
            type="password"
            id="confirmPassword"
            style={styles.formControl}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={styles.button}>注册</button>
      </form>
    </div>
  );
};

const styles = {
  authContainer: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '15px',
  },
  formControl: {
    width: '100%',
    height: '40px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '15px',
    textAlign: 'center',
  },
};

export default Register;

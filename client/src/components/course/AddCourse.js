import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/courses', { title, description });
      navigate(`/course/${response.data.id}`);
    } catch (error) {
      setError('无法添加课程，请稍后再试。');
    }
  };

  return (
    <div className="add-course">
      <h2>添加课程</h2>
      {error && <div style={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="title">课程标题</label>
          <input
            type="text"
            id="title"
            style={styles.formControl}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="description">课程描述</label>
          <textarea
            id="description"
            style={styles.formControl}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" style={styles.button}>添加课程</button>
      </form>
    </div>
  );
};

const styles = {
  formGroup: {
    marginBottom: '15px',
  },
  formControl: {
    width: '100%',
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

export default AddCourse;

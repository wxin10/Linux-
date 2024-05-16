import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`/api/courses/${id}`);
        setCourse(response.data);
        setLoading(false);
      } catch (error) {
        setError('无法加载课程详细信息，请稍后再试。');
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/courses/${id}`);
      navigate('/courses');
    } catch (error) {
      setError('无法删除课程，请稍后再试。');
    }
  };

  if (loading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button onClick={handleDelete} className="btn btn-danger">删除课程</button>
    </div>
  );
};

export default CourseDetail;

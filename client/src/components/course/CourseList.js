import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/courses');
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        setError('无法加载课程列表，请稍后再试。');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="course-list">
      <h2>课程列表</h2>
      {courses.length === 0 ? (
        <div>没有可用的课程。</div>
      ) : (
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <Link to={`/course/${course.id}`}>{course.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseList;

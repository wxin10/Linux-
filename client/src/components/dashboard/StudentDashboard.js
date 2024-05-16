import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesResponse = await axios.get('/api/student/courses');
        const assignmentsResponse = await axios.get('/api/student/assignments');
        setCourses(coursesResponse.data);
        setAssignments(assignmentsResponse.data);
        setLoading(false);
      } catch (error) {
        setError('无法加载学生仪表盘数据，请稍后再试。');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="student-dashboard">
      <h2>学生仪表盘</h2>
      <div className="courses">
        <h3>我的课程</h3>
        {courses.length === 0 ? (
          <div>没有课程。</div>
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
      <div className="assignments">
        <h3>我的作业</h3>
        {assignments.length === 0 ? (
          <div>没有作业。</div>
        ) : (
          <ul>
            {assignments.map(assignment => (
              <li key={assignment.id}>
                <Link to={`/assignment/${assignment.id}`}>{assignment.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;

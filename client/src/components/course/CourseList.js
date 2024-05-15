import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CourseList() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // 假设 fetchCourses() 是一个从后端获取课程数据的异步函数
        const fetchCourses = async () => {
            const response = await fetch('/api/courses');
            const data = await response.json();
            setCourses(data);
        };

        fetchCourses();
    }, []);

    return (
        <div>
            <h2>Available Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        <Link to={`/course/${course.id}`}>{course.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseList;

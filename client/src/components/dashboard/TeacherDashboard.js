import React, { useState, useEffect } from 'react';

function TeacherDashboard() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // 假设此函数从API获取教师管理的课程列表
        const fetchCourses = async () => {
            const response = await fetch('/api/teacher/courses');
            const data = await response.json();
            setCourses(data);
        };

        fetchCourses();
    }, []);

    return (
        <div>
            <h1>Teacher Dashboard</h1>
            <h2>Managed Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        {course.title} - Enrolled Students: {course.enrolled}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TeacherDashboard;

import React, { useState, useEffect } from 'react';

function StudentDashboard() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // 假设此函数从API获取学生的课程列表
        const fetchCourses = async () => {
            const response = await fetch('/api/student/courses');
            const data = await response.json();
            setCourses(data);
        };

        fetchCourses();
    }, []);

    return (
        <div>
            <h1>Student Dashboard</h1>
            <h2>Your Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        {course.title} - Progress: {course.progress}%
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentDashboard;

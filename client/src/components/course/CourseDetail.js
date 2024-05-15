import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            const response = await fetch(`/api/courses/${id}`);
            const data = await response.json();
            setCourse(data);
        };

        fetchCourse();
    }, [id]);

    if (!course) return <div>Loading...</div>;

    return (
        <div>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            {/* 更多课程细节 */}
        </div>
    );
}

export default CourseDetail;

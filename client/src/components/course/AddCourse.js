import React, { useState } from 'react';

function AddCourse() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const course = { title, description };
        const response = await fetch('/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course)
        });
        const data = await response.json();
        console.log(data);  // 处理响应数据
    };

    return (
        <div>
            <h2>Add a New Course</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Course</button>
            </form>
        </div>
    );
}

export default AddCourse;

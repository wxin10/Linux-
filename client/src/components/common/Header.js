import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Online Education Platform</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
        </header>
    );
}

export default Header;

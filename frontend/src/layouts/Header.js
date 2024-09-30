import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Marine Pollution and Restoration</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
};

export default Header;

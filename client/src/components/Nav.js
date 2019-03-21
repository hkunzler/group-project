import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="navbar">
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
            <Link to='/cart'>Shopping Cart</Link>
        </div>
    );
};

export default Nav;
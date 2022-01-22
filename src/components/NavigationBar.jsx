import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className="active" exact="true">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="active" exact="true">ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="active" exact="true">CONTACT</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className="active" exact="true">BLOG</NavLink>
                </li>
            </ul>
        </nav>
    );
}

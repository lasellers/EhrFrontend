import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/patients">Patients</Link>
            </li>
            <li>
                <Link to="/patient">Patient</Link>
            </li>
            <li>
                <Link to="/condition">Condition</Link>
            </li>
            <li>
                <Link to="/device">Device</Link>
            </li>
            <li>
                <Link to="/practictioner">Practictioner</Link>
            </li>
            <li>
                <Link to="/procedure">Procedure</Link>
            </li>
            <li>
                <Link to="/comments">Comments</Link>
            </li>
            <li>
                <Link to="/about">About EHR</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;

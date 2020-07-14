import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

class NavBar extends React.Component {

    render() {

        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/patients">Patients</Link>
                    </li>

                    <ul>
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
                            <Link to="/practitioner">Practitioner</Link>
                        </li>
                        <li>
                            <Link to="/procedure">Procedure</Link>
                        </li>
                    </ul>

                    <li>
                        <Link to="/comments">Comments</Link>
                    </li>
                    <li>
                        <Link to="/about">About EHR</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;

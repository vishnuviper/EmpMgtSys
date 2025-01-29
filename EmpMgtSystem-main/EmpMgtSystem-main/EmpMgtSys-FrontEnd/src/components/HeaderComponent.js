import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const HeaderComponent = () => {
    const history = useHistory();

    const handleLogout = () => {
        // Clear any session or authentication tokens (if any)
        // Redirect to login page
        history.push('/login');
    };

    return (
        <div>
            <header className="header">
                <nav className="navbar navbar-expand-md navbar-light bg-light py-2 shadow-sm">
                    <div className="container-fluid">
                        {/* Brand logo or title */}
                        <a href="/" className="navbar-brand">
                            <strong>Employee Management System</strong>
                        </a>

                        {/* Collapse button for mobile view */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Navbar links and buttons */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/employees" className="nav-link">Contact Us</Link>
                                </li>
                            </ul>

                            {/* Logout button aligned to the right */}
                            {/* <form className="d-flex">
                                <button className="btn btn-danger" type="button" onClick={handleLogout}>
                                    Logout
                                </button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default HeaderComponent;

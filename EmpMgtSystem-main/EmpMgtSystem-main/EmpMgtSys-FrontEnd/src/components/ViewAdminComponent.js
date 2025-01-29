import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Component.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewAdminComponent = () => {
    const { id } = useParams();

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className="sidebar bg-success text-light p-4" style={{ width: '250px', height: '100vh' }}>
                <h4 className="text-center mb-4">Admin Dashboard</h4>
                <ul className="nav flex-column">
                    <li className="nav-item mb-3">
                        <Link className="nav-link text-white hover-link" to={`/view-employee-personal/${id}`}>
                            Personal
                        </Link>
                    </li>
                    <li className="nav-item mb-3">
                        <Link className="nav-link text-white hover-link" to={`/view-employee-professional/${id}`}>
                            Professional
                        </Link>
                    </li>
                    <li className="nav-item mb-3">
                        <Link className="nav-link text-white hover-link" to={`/view-admin-finance/${id}`}>
                            Finance
                        </Link>
                    </li>
                    <li className="nav-item mb-3">
                        <Link className="nav-link text-white hover-link" to={`/`}>
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Content Area */}
            <div className="content flex-grow-1 p-4 animate-content">
                
                <h3>Welcome to the Admin Dashboard</h3>
                <p>Select an option from the sidebar to view details.</p>
            </div>
        </div>
    );
};

export default ViewAdminComponent;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import './Component.css'; // Import your custom CSS for animations

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees();
    }, []);

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees()
            .then((response) => {
                setEmployees(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId)
            .then((response) => {
                getAllEmployees();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container mt-4">
            
            <div className="text-center mb-4">
                <Link to="/" className="btn btn-danger btn-lg shadow-md logout">Logout</Link>
            </div>
            <h2 className="text-center mb-4 fade-in">Employee Information and Profiles.</h2>
            
            <div className="text-center mb-4">
                <Link to="/add-employee" className="btn btn-primary btn-lg shadow-md">Add Employee</Link>
                
                
            </div>
            

            <div className="row">
                {employees.map((employee) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={employee.id}>
                        <div className="card shadow-sm h-100 fade-in-card">
                            <div className="card-header bg-warning text-white">
                                S.No: {employee.id}
                            </div>
                            <div className="card-body">
                                <h2 className="card-title text-primary">{employee.employeeFirstName} {employee.employeeLastName}</h2>
                                <p className="card-text"><strong>Employee Code:</strong> {employee.employeeCode}</p>
                                <p className="card-text"><strong>Location:</strong> {employee.currentCity}</p>
                                <p className="card-text"><strong>Email:</strong> {employee.emailId}</p>
                                <p className="card-text"><strong>Password:</strong> {employee.employeeCode}_{employee.employeeLastName}</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <Link to={`/view-admin/${employee.id}`} className="btn btn-info btn-md">View</Link>
                                <Link to={`/edit-employee/${employee.id}`} className="btn btn-warning btn-md">Edit</Link>
                                <button
                                    onClick={() => deleteEmployee(employee.id)}
                                    className="btn btn-danger btn-md"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListEmployeeComponent;

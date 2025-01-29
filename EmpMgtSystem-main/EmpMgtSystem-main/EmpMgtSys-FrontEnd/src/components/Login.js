import React, { useState } from "react";
import './Component.css';
import { Link, useHistory } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const employeeLogin = { username, password };

    const HandleSubmit = (e) => {
        e.preventDefault();
        EmployeeService.login(employeeLogin).then((response) => {
            if (response.data.position === "Admin") {
                history.push("/employees");
            } else {
                console.log("Logged in by: " + response.data.position);
                history.push("/view-employee/" + response.data.id);
            }
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="login-bg d-flex justify-content-center align-items-center min-vh-100 fade-in">
            <div className="card shadow-lg p-4 form-slide-in" style={{ width: '400px', borderRadius: '10px' }}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4 heading-animate"> Admin / Employee Login</h3>
                    <form onSubmit={HandleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="employeeCode" className="form-label">Employee Code</label>
                            <input
                                type="text"
                                className="form-control"
                                id="employeeCode"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your employee code"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary btn-animate">Login</button>
                        </div>
                    </form>
                    <div className="mt-3 text-center">
                        <Link to="#" className="text-decoration-none">Forgot Password?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

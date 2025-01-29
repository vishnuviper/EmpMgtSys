import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewEmployeePersonalComponent = () => {

    const [employeeFirstName, setEmployeeFirstName] = useState('');
    const [employeeCode, setEmployeeCode] = useState('');
    const [employeeLastName, setEmployeeLastName] = useState('');
    const [emailId, setEmailId] = useState('');

    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [currentAddressLine1, setCurrentAddressLine1] = useState('');
    const [currentAddressLine2, setCurrentAddressLine2] = useState('');
    const [currentCity, setCurrentCity] = useState('');
    const [currentPincode, setCurrentPincode] = useState('');
    const [permanentAddressLine1, setPermanentAddressLine1] = useState('');
    const [permanentAddressLine2, setPermanentAddressLine2] = useState('');
    const [permanentCity, setPermanentCity] = useState('');
    const [permanentPincode, setPermanentPincode] = useState('');
    const [mobile, setMobile] = useState('');
    const [emergencyContactName, setEmergencyContactName] = useState('');
    const [emergencyMobile, setEmergencyMobile] = useState('');

    const { id } = useParams();

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setEmployeeFirstName(response.data.employeeFirstName);
            setEmployeeLastName(response.data.employeeLastName);
            setEmployeeCode(response.data.employeeCode);
            setEmailId(response.data.emailId);
            setDateOfBirth(response.data.dateOfBirth);
            setGender(response.data.gender);
            setAge(response.data.age);
            setCurrentAddressLine1(response.data.currentAddressLine1);
            setCurrentAddressLine2(response.data.currentAddressLine2);
            setCurrentCity(response.data.currentCity);
            setCurrentPincode(response.data.currentPincode);
            setPermanentAddressLine1(response.data.permanentAddressLine1);
            setPermanentAddressLine2(response.data.permanentAddressLine2);
            setPermanentCity(response.data.permanentCity);
            setPermanentPincode(response.data.permanentPincode);
            setMobile(response.data.mobile);
            setEmergencyContactName(response.data.emergencyContactName);
            setEmergencyMobile(response.data.emergencyMobile);
        }).catch(error => {
            console.log(error);
        });
    }, [id]);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Employee Details</h2>
            <div className="row">
                {/* Personal Information */}
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-header bg-primary text-white">Personal Information</div>
                        <div className="card-body">
                            <p><strong>Employee ID:</strong> {id}</p>
                            <p><strong>First Name:</strong> {employeeFirstName}</p>
                            <p><strong>Last Name:</strong> {employeeLastName}</p>
                            <p><strong>Employee Code:</strong> {employeeCode}</p>
                            <p><strong>Email ID:</strong> {emailId}</p>
                            <p><strong>Date of Birth:</strong> {dateOfBirth}</p>
                            {/* <p><strong>Gender:</strong> {gender}</p> */}
                            <p><strong>Age:</strong> {age}</p>
                            <p><strong>Mobile:</strong> {mobile}</p>
                            <p><strong>Password:</strong> {employeeCode}_{employeeLastName}</p>
                        </div>
                    </div>
                </div>

                {/* Address Information */}
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-header bg-info text-white">Address Information</div>
                        <div className="card-body">
                            <h5>Current Address</h5>
                            <p>{currentAddressLine1}</p>
                            <p>{currentAddressLine2}</p>
                            <p>{currentCity} - {currentPincode}</p>

                            <h5 className="mt-3">Permanent Address</h5>
                            <p>{permanentAddressLine1}</p>
                            <p>{permanentAddressLine2}</p>
                            <p>{permanentCity} - {permanentPincode}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Emergency Contact Information */}
            <div className="card mb-4">
                <div className="card-header bg-danger text-white">Emergency Contact Information</div>
                <div className="card-body">
                    <p><strong>Contact Name:</strong> {emergencyContactName}</p>
                    <p><strong>Emergency Mobile:</strong> {emergencyMobile}</p>
                </div>
            </div>
        </div>
    );
}

export default ViewEmployeePersonalComponent;

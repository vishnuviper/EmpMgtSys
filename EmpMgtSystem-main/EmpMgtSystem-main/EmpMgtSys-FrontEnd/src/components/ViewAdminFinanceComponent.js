import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewAdminFinanceComponent = () => {
    const [employeeFirstName, setEmployeeFirstName] = useState('');
    const [employeeLastName, setEmployeeLastName] = useState('');
    const [employeeCode, setEmployeeCode] = useState('');
    const [panCardNumber, setPanCardNumber] = useState('');
    const [aadharCardNumber, setAadharCardNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [IFSC_Code, setIFSC_Code] = useState('');
    const [bankBranch, setBankBranch] = useState('');
    const [basicSalary, setBasicSalary] = useState('');
    const [bonus, setBonus] = useState('');
    const [houseRentAllowance, setHouseRentAllowance] = useState('');
    const [medicalAllowance, setMedicalAllowance] = useState('');
    const [travelAllowance, setTravelAllowance] = useState('');
    const [PF, setPF] = useState('');
    const [tax, setTax] = useState('');
    const [CTC, setCTC] = useState('');

    const { id } = useParams();

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setEmployeeFirstName(response.data.employeeFirstName);
            setEmployeeLastName(response.data.employeeLastName);
            setEmployeeCode(response.data.employeeCode);
            setPanCardNumber(response.data.panCardNumber);
            setAadharCardNumber(response.data.aadharCardNumber);
            setBankName(response.data.bankName);
            setIFSC_Code(response.data.IFSC_Code);
            setBankBranch(response.data.bankBranch);
            setBasicSalary(response.data.basicSalary);
            setBonus(response.data.bonus);
            setHouseRentAllowance(response.data.houseRentAllowance);
            setMedicalAllowance(response.data.medicalAllowance);
            setTravelAllowance(response.data.travelAllowance);
            setPF(response.data.PF);
            setTax(response.data.tax);
            setCTC(response.data.CTC);
        }).catch(error => {
            console.log(error);
        });
    }, [id]);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Employee Finance Details</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="card-header bg-primary text-white">
                            Personal Information
                        </div>
                        <div className="card-body">
                            <p><strong>Name:</strong> {employeeFirstName} {employeeLastName}</p>
                            <p><strong>Employee Code:</strong> {employeeCode}</p>
                            <p><strong>PAN Card:</strong> {panCardNumber}</p>
                            <p><strong>Aadhar Card:</strong> {aadharCardNumber}</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="card-header bg-danger text-white">
                            Bank Information
                        </div>
                        <div className="card-body">
                            <p><strong>Bank Name:</strong> {bankName}</p>
                            <p><strong>IFSC Code:</strong> {IFSC_Code}</p>
                            <p><strong>Branch:</strong> {bankBranch}</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="card-header bg-info text-white">
                            Salary & Allowances
                        </div>
                        <div className="card-body">
                            <p><strong>Basic Salary:</strong> {basicSalary}</p>
                            <p><strong>Bonus:</strong> {bonus}</p>
                            <p><strong>House Rent Allowance:</strong> {houseRentAllowance}</p>
                            <p><strong>Medical Allowance:</strong> {medicalAllowance}</p>
                            <p><strong>Travel Allowance:</strong> {travelAllowance}</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="card-header bg-warning text-white">
                            Deductions & CTC
                        </div>
                        <div className="card-body">
                            <p><strong>PF:</strong> {PF}</p>
                            <p><strong>Tax:</strong> {tax}</p>
                            <p><strong>CTC:</strong> {tax}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewAdminFinanceComponent;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import jsPDF from 'jspdf';  // Import jsPDF
import 'jspdf-autotable';   // Optional: for table support
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './view.css';

const ViewEmployeeFinanceComponent = () => {
    const [employeeFirstName, setEmployeeFirstName] = useState('');
    const [employeeCode, setEmployeeCode] = useState('');
    const [employeeLastName, setEmployeeLastName] = useState('');
    const [panCardNumber, setPanCardNumber] = useState('');
    const [aadharCardNumber, setAadharCardNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const [bankBranch, setBankBranch] = useState('');
    const [basicSalary, setBasicSalary] = useState('');
    const [bonus, setBonus] = useState('');
    const [houseRentAllowance, setHouseRentAllowance] = useState('');
    const [medicalAllowance, setMedicalAllowance] = useState('');
    const [travelAllowance, setTravelAllowance] = useState('');
    const [pf, setPf] = useState('');
    const [tax, setTax] = useState('');
    const [ctc, setCtc] = useState('');

    const { id } = useParams();
    
    const employee = {
        employeeFirstName, employeeLastName, employeeCode, panCardNumber, aadharCardNumber,
        bankName, ifscCode, bankBranch, basicSalary, bonus, houseRentAllowance,
        medicalAllowance, travelAllowance, pf, tax, ctc
    };

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setEmployeeFirstName(response.data.employeeFirstName);
            setEmployeeLastName(response.data.employeeLastName);
            setEmployeeCode(response.data.employeeCode);
            setPanCardNumber(response.data.panCardNumber);
            setAadharCardNumber(response.data.aadharCardNumber);
            setBankName(response.data.bankName);
            setIfscCode(response.data.ifscCode);
            setBankBranch(response.data.bankBranch);
            setBasicSalary(response.data.basicSalary);
            setBonus(response.data.bonus);
            setHouseRentAllowance(response.data.houseRentAllowance);
            setMedicalAllowance(response.data.medicalAllowance);
            setTravelAllowance(response.data.travelAllowance);
            setPf(response.data.pf);
            setTax(response.data.tax);
            setCtc(response.data.ctc);
        }).catch(error => {
            console.log(error);
        });
    }, [id]);

    // Function to generate PDF
    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text("Employee Finance Details", 10, 10);

        doc.setFontSize(12);
        doc.text(`Employee Name: ${employeeFirstName} ${employeeLastName}`, 10, 20);
        doc.text(`Employee Code: ${employeeCode}`, 10, 30);
        doc.text(`PAN: ${panCardNumber}`, 10, 40);
        doc.text(`Aadhar: ${aadharCardNumber}`, 10, 50);
        doc.text(`Bank Name: ${bankName}`, 10, 60);
        doc.text(`IFSC Code: ${ifscCode}`, 10, 70);
        doc.text(`Bank Branch: ${bankBranch}`, 10, 80);
        doc.text(`Basic Salary: ${basicSalary}`, 10, 90);
        doc.text(`Bonus: ${bonus}`, 10, 100);
        doc.text(`House Rent Allowance: ${houseRentAllowance}`, 10, 110);
        doc.text(`Medical Allowance: ${medicalAllowance}`, 10, 120);
        doc.text(`Travel Allowance: ${travelAllowance}`, 10, 130);
        doc.text(`PF: ${pf}`, 10, 140);
        doc.text(`Tax: ${tax}`, 10, 150);
        doc.text(`CTC: ${ctc}`, 10, 160);
        doc.text(`Jan Salary: 67000`,10,170 );
        doc.text(`Feb Salary: ${basicSalary+10000}`,10,180 );
        doc.text(`March Salary: ${basicSalary+20000}`,10,190 );
        doc.text(`April Salary: ${basicSalary+15000}`,10,200 );
        doc.text(`May Salary: ${basicSalary+25000}`,10,210 );

        doc.save(`${employeeFirstName}_${employeeLastName}_FinanceDetails.pdf`);
    };

    return (
        <Container className="mt-4">
            <Row>
                {/* Personal Details Card */}
                <Col md={6} className="mb-4">
                    <Card className="shadow-sm">
                        <Card.Header className="bg-primary text-white">
                            Personal Information
                        </Card.Header>
                        <Card.Body>
                            <p><strong>Employee ID:</strong> {id}</p>
                            <p><strong>First Name:</strong> {employeeFirstName}</p>
                            <p><strong>Last Name:</strong> {employeeLastName}</p>
                            <p><strong>Employee Code:</strong> {employeeCode}</p>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Financial Details Card */}
                <Col md={6} className="mb-4">
                    <Card className="shadow-sm">
                        <Card.Header className="bg-warning text-white">
                            Financial Information
                        </Card.Header>
                        <Card.Body>
                            <p><strong>PAN:</strong> {panCardNumber}</p>
                            <p><strong>Aadhar:</strong> {aadharCardNumber}</p>
                            <p><strong>Bank Name:</strong> {bankName}</p>
                            <p><strong>IFSC Code:</strong> {ifscCode}</p>
                            <p><strong>Bank Branch:</strong> {bankBranch}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                {/* Salary Details Card */}
                <Col md={6} className="mb-4">
                    <Card className="shadow-sm">
                        <Card.Header className="bg-info text-white">
                            Salary Details
                        </Card.Header>
                        <Card.Body>
                            <p><strong>Basic Salary:</strong> {basicSalary}</p>
                            <p><strong>Bonus:</strong> {bonus}</p>
                            <p><strong>House Rent Allowance:</strong> {houseRentAllowance}</p>
                            <p><strong>Medical Allowance:</strong> {medicalAllowance}</p>
                            <p><strong>Travel Allowance:</strong> {travelAllowance}</p>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Deductions Card */}
                <Col md={6} className="mb-4">
                    <Card className="shadow-sm">
                        <Card.Header className="bg-danger text-white">
                            Deductions & CTC
                        </Card.Header>
                        <Card.Body>
                            <p><strong>PF:</strong> {pf}</p>
                            <p><strong>Tax:</strong> {tax}</p>
                            <p><strong>CTC:</strong> {ctc}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* PDF Button */}
            <Button variant="primary" onClick={generatePDF}>Download PaySlip</Button>
        </Container>
    );
};

export default ViewEmployeeFinanceComponent;

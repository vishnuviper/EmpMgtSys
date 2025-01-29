import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component.css'; // Make sure to create this CSS file for additional styles

const ViewEmployeeProfessionalComponent = () => {
    const [employeeFirstName, setEmployeeFirstName] = useState('');
    const [employeeCode, setEmployeeCode] = useState('');
    const [employeeLastName, setEmployeeLastName] = useState('');
    const [companyMail, setCompanyMail] = useState('');
    const [officePhoneNo, setOfficePhoneNo] = useState('');
    const [officeCity, setOfficeCity] = useState('');
    const [reportingManagerMail, setReportingManagerMail] = useState('');
    const [hrMail, setHrMail] = useState('');
    const [previousCompany, setPreviousCompany] = useState('');
    const [previousCompanyJoinDate, setPreviousCompanyJoinDate] = useState('');
    const [previousCompanyEndDate, setPreviousCompanyEndDate] = useState('');
    const [projectCode, setProjectCode] = useState('');
    const [projectStartDate, setProjectStartDate] = useState('');
    const [projectEndDate, setProjectEndDate] = useState('');

    const { id } = useParams();

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setEmployeeFirstName(response.data.employeeFirstName);
            setEmployeeLastName(response.data.employeeLastName);
            setEmployeeCode(response.data.employeeCode);
            setCompanyMail(response.data.companyMail);
            setOfficePhoneNo(response.data.officePhoneNo);
            setOfficeCity(response.data.officeCity);
            setReportingManagerMail(response.data.reportingManagerMail);
            setHrMail(response.data.hrMail);
            setPreviousCompany(response.data.previousCompany);
            setPreviousCompanyJoinDate(response.data.previousCompanyJoinDate);
            setPreviousCompanyEndDate(response.data.previousCompanyEndDate);
            setProjectCode(response.data.projectCode);
            setProjectStartDate(response.data.projectStartDate);
            setProjectEndDate(response.data.projectEndDate);
        }).catch(error => {
            console.log(error);
        });
    }, [id]);

    return (
        <Container className="mt-5">
            <Row>
                <Col md={6} className="mx-auto">
                    <Card className="mb-4 shadow-sm">
                        <Card.Header as="h5" className="bg-info text-white">Employee Information</Card.Header>
                        <Card.Body>
                            <Card.Text><strong>Employee ID:</strong> {id}</Card.Text>
                            <Card.Text><strong>First Name:</strong> {employeeFirstName}</Card.Text>
                            <Card.Text><strong>Last Name:</strong> {employeeLastName}</Card.Text>
                            <Card.Text><strong>Employee Code:</strong> {employeeCode}</Card.Text>
                            <Card.Text><strong>Company Email:</strong> {companyMail}</Card.Text>
                            <Card.Text><strong>Office Phone No:</strong> {officePhoneNo}</Card.Text>
                            <Card.Text><strong>Office City:</strong> {officeCity}</Card.Text>
                            <Card.Text><strong>Reporting Manager Email:</strong> {reportingManagerMail}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={6} className="mx-auto">
                    <Card className="mb-4 shadow-sm">
                        <Card.Header as="h5" className="bg-danger text-white">Professional Details</Card.Header>
                        <Card.Body>
                            <Card.Text><strong>HR Email:</strong> {hrMail}</Card.Text>
                            <Card.Text><strong>Previous Company:</strong> {previousCompany}</Card.Text>
                            <Card.Text><strong>Previous Company Join Date:</strong> {previousCompanyJoinDate}</Card.Text>
                            <Card.Text><strong>Previous Company End Date:</strong> {previousCompanyEndDate}</Card.Text>
                            <Card.Text><strong>Project Code:</strong> {projectCode}</Card.Text>
                            <Card.Text><strong>Project Start Date:</strong> {projectStartDate}</Card.Text>
                            <Card.Text><strong>Project End Date:</strong> {projectEndDate}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Button variant="primary" className="d-block mx-auto">Go Back</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ViewEmployeeProfessionalComponent;

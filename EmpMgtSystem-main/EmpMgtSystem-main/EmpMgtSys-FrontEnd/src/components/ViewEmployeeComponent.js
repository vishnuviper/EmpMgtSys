import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Component.css';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const ViewEmployeeComponent = () => {
    const { id } = useParams();

    return (
        <Container fluid className="p-0">
            <Row>
                {/* Sidebar */}
                <Col md={3} className="bg-dark text-white vh-100 p-4 sidebar nav-blac">
                    <h4 className="mb-4">Employee Dashboard</h4>
                    <Nav className="flex-column">
                        <Nav.Item className="mb-3">
                            <Link className="nav-link text-white hover-link" to={`/view-employee-personal/${id}`}>
                                Personal
                            </Link>
                        </Nav.Item>
                        <Nav.Item className="mb-3">
                            <Link className="nav-link text-white hover-link" to={`/view-employee-professional/${id}`}>
                                Professional
                            </Link>
                        </Nav.Item>
                        <Nav.Item className="mb-3">
                            <Link className="nav-link text-white hover-link" to={`/view-employee-finance/${id}`}>
                                Finance
                            </Link>
                        </Nav.Item>
                        <Nav.Item className="mb-3">
                            <Link className="nav-link text-white hover-link" to={`/`}>
                                Logout
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Col>

                {/* Main Content */}
                <Col md={9} className="p-4 animate-content">
                
                    <h2>Welcome to the Employee Dashboard</h2>
                    <p>Select a section from the sidebar to view detailed employee information.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ViewEmployeeComponent;

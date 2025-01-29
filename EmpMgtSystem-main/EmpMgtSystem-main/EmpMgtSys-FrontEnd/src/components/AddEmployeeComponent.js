import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddEmployeeComponent = () => {
  const [employeeFirstName, setEmployeeFirstName] = useState('');
  const [employeeLastName, setEmployeeLastName] = useState('');
  const [employeeCode, setEmployeeCode] = useState('');
  const [emailId, setEmailId] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');

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
  
  const [errors, setErrors] = useState({}); // Validation errors

  const history = useHistory();
  const { id } = useParams();

  const validateForm = () => {
    let formErrors = {};

    if (!employeeFirstName ) {
      formErrors.employeeFirstName = 'First name is required and should contain only letters';
    }

    if (!employeeLastName) {
      formErrors.employeeLastName = 'Last name is required and should contain only letters';
    }

    if (!employeeCode) {
      formErrors.employeeCode = 'Employee code is required and should be alphanumeric';
    }

    if (!emailId ) {
      formErrors.emailId = 'Valid email is required';
    }

    if (!dateOfBirth) {
      formErrors.dateOfBirth = 'Date of birth is required';
    }

    if (!age || age <= 0 || age > 100) {
        formErrors.age = 'Valid age is required (1-100)';
    }

    if (!position) {
        formErrors.position = 'Position is required';
    }

    if (!currentAddressLine1) {
        formErrors.currentAddressLine1 = 'Address Line 1 is required';
    }
    if (!currentCity) {
        formErrors.currentCity = 'City is required';
    }
    if (!currentPincode || !/^\d{6}$/.test(currentPincode)) {
        formErrors.currentPincode = 'Valid 6-digit pincode is required';
    }
    if (!permanentAddressLine1) {
        formErrors.permanentAddressLine1 = 'Permanent Address Line 1 is required';
    }
    if (!permanentCity) {
        formErrors.permanentCity = 'Permanent City is required';
    }
    if (!permanentPincode || !/^\d{6}$/.test(permanentPincode)) {
        formErrors.permanentPincode = 'Valid 6-digit Pincode is required';
    }
    if (!mobile || !/^\d{10}$/.test(mobile)) {
        formErrors.mobile = 'Valid 10-digit mobile number is required';
    }

    if (!emergencyContactName) {
        formErrors.emergencyContactName = 'Emergency contact name is required';
    }
    if (!emergencyMobile || !/^\d{10}$/.test(emergencyMobile)) {
        formErrors.emergencyMobile = 'Valid 10-digit emergency mobile number is required';
    }
    if (!companyMail) {
        formErrors.companyMail = 'Valid email is required';
    }
    if (!officePhoneNo ) {
        formErrors.officePhoneNo = 'Valid office phone number is required (10 digits).';
    }
    if (!officeCity) {
        formErrors.officeCity = 'Office city is required.';
    }
    if (!reportingManagerMail ) {
        formErrors.reportingManagerMail = 'Valid manager email is required.';
    }
    if (!hrMail) {
        formErrors.hrMail = 'Valid HR email is required.';
    }
    if (!previousCompany) {
        formErrors.previousCompany = 'Previous company name is required.';
    }
    if (!previousCompanyJoinDate) {
        formErrors.previousCompanyJoinDate = 'Previous company join date is required.';
    }
    if (!previousCompanyEndDate) {
        formErrors.previousCompanyEndDate = 'Previous company end date is required.';
    }
    if (!projectCode) {
        formErrors.projectCode = 'Project code is required.';
    }
    if (!projectStartDate) {
        formErrors.projectStartDate = 'Project start date is required.';
    }
    if (!projectEndDate) {
        formErrors.projectEndDate = 'Project end date is required.';
    }
    if (!panCardNumber) {
        formErrors.panCardNumber = 'Valid PAN number is required (e.g., ABCDE1234F).';
    }
    if (!aadharCardNumber ) {
        formErrors.aadharCardNumber = 'Valid Aadhar number is required (12 digits).';
    }

    // IFSC code validation (alphanumeric, 11 characters)
    if (!ifscCode ) {
        formErrors.ifscCode = 'Valid IFSC code is required (5 alphabets & 5 numbers).';
      }
  
      // Numeric fields should not be empty or negative
      const numericFields = [
        { value: basicSalary, name: 'basicSalary', label: 'Basic Salary' },
        { value: bonus, name: 'bonus', label: 'Bonus' },
        { value: houseRentAllowance, name: 'houseRentAllowance', label: 'House Rent Allowance' },
        { value: medicalAllowance, name: 'medicalAllowance', label: 'Medical Allowance' },
        { value: travelAllowance, name: 'travelAllowance', label: 'Travel Allowance' },
        { value: pf, name: 'pf', label: 'PF' },
        { value: tax, name: 'tax', label: 'Tax' },
        { value: ctc, name: 'ctc', label: 'CTC' }
      ];
  
      numericFields.forEach((field) => {
        if (field.value === '' || isNaN(field.value) || field.value < 0) {
          formErrors[field.name] = `${field.label} must be a positive number.`;
        }
      });

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Return true if no errors
  };

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const employee = {
      employeeFirstName,
      employeeLastName,
      employeeCode,
      emailId,
      dateOfBirth,
      age,
      position,

      currentAddressLine1, currentAddressLine2, currentCity, currentPincode,
      permanentAddressLine1, permanentAddressLine2, permanentCity, permanentPincode, mobile,
    
      emergencyContactName, emergencyMobile, companyMail,
      officePhoneNo, officeCity, reportingManagerMail,
      hrMail, previousCompany, previousCompanyJoinDate,
      previousCompanyEndDate, projectCode, projectStartDate,
      projectEndDate, panCardNumber, aadharCardNumber,

      bankName,
      ifscCode,
      bankBranch,
      basicSalary,
      bonus,
      houseRentAllowance,
      medicalAllowance,
      travelAllowance,
      pf,
      tax,
      ctc
    };

    if (validateForm()) {
      if (id) {
        EmployeeService.updateEmployee(id, employee)
          .then((response) => {
            history.push('/employees');
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        EmployeeService.createEmployee(employee)
          .then((response) => {
            console.log(response.data);
            history.push('/employees');
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(id)
        .then((response) => {
          setEmployeeFirstName(response.data.employeeFirstName);
          setEmployeeLastName(response.data.employeeLastName);
          setEmployeeCode(response.data.employeeCode);
          setEmailId(response.data.emailId);
          setDateOfBirth(response.data.dateOfBirth);
          setAge(response.data.age);
          setPosition(response.data.position);

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
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const title = () => {
    return id ? <h2 className="text-center my-4">Update Employee</h2> : <h2 className="text-center my-4">Add Employee</h2>;
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg p-4 mb-5 bg-white rounded">
            {title()}
            <div className="card-body">
              <form>
                <h3 className="text-primary mb-3">Personal Details</h3>

                <div className="form-group mb-3">
                  <label className="form-label">First Name:</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="employeeFirstName"
                    className="form-control form-control-lg"
                    value={employeeFirstName}
                    onChange={(e) => setEmployeeFirstName(e.target.value)}
                  />
                  {errors.employeeFirstName && <small className="text-danger">{errors.employeeFirstName}</small>}
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Last Name:</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="employeeLastName"
                    className="form-control form-control-lg"
                    value={employeeLastName}
                    onChange={(e) => setEmployeeLastName(e.target.value)}
                  />
                  {errors.employeeLastName && <small className="text-danger">{errors.employeeLastName}</small>}
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Employee Code:</label>
                  <input
                    type="text"
                    placeholder="Enter employee code"
                    name="employeeCode"
                    className="form-control form-control-lg"
                    value={employeeCode}
                    onChange={(e) => setEmployeeCode(e.target.value)}
                  />
                  {errors.employeeCode && <small className="text-danger">{errors.employeeCode}</small>}
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Personal Email ID:</label>
                  <input
                    type="email"
                    placeholder="Enter email Id"
                    name="emailId"
                    className="form-control form-control-lg"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                  {errors.emailId && <small className="text-danger">{errors.emailId}</small>}
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Date of Birth:</label>
                  <input
                    type="date"
                    placeholder="Enter Date of Birth"
                    name="dateOfBirth"
                    className="form-control form-control-lg"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                  {errors.dateOfBirth && <small className="text-danger">{errors.dateOfBirth}</small>}
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    placeholder="Enter Age"
                    name="age"
                    className="form-control form-control-lg"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  {errors.age && <small className="text-danger">{errors.age}</small>}
                </div>

                <div className="form-group mb-4">
                  <label className="form-label">Position</label>
                  <input
                    type="text"
                    placeholder="Enter Position"
                    name="position"
                    className="form-control form-control-lg"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                  />
                  {errors.position && <small className="text-danger">{errors.position}</small>}
                </div>

                <h3 className="text-primary mb-3">Address Details:</h3>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Current Address Line 1</label>
                <input
                  type="text"
                  placeholder="Enter current Address Line 1"
                  className="form-control"
                  value={currentAddressLine1}
                  onChange={(e) => setCurrentAddressLine1(e.target.value)}
                />
                {errors.currentAddressLine1 && <small className="text-danger">{errors.currentAddressLine1}</small>}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Current Address Line 2</label>
                <input
                  type="text"
                  placeholder="Enter current Address Line 2"
                  className="form-control"
                  value={currentAddressLine2}
                  onChange={(e) => setCurrentAddressLine2(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Current City</label>
                <input
                  type="text"
                  placeholder="Enter City"
                  className="form-control"
                  value={currentCity}
                  onChange={(e) => setCurrentCity(e.target.value)}
                />
                {errors.currentCity && <small className="text-danger">{errors.currentCity}</small>}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Current Pincode</label>
                <input
                  type="number"
                  placeholder="Enter Pincode"
                  className="form-control"
                  value={currentPincode}
                  onChange={(e) => setCurrentPincode(e.target.value)}
                />
                {errors.currentPincode && <small className="text-danger">{errors.currentPincode}</small>}
              </div>
            </div>

            <h3 className="text-primary mb-3">Permanent Address:</h3>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Permanent Address Line 1</label>
                <input
                  type="text"
                  placeholder="Enter Permanent Address"
                  className="form-control"
                  value={permanentAddressLine1}
                  onChange={(e) => setPermanentAddressLine1(e.target.value)}
                />
                {errors.permanentAddressLine1 && <small className="text-danger">{errors.permanentAddressLine1}</small>}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Permanent Address Line 2</label>
                <input
                  type="text"
                  placeholder="Enter Permanent Address"
                  className="form-control"
                  value={permanentAddressLine2}
                  onChange={(e) => setPermanentAddressLine2(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Permanent City</label>
                <input
                  type="text"
                  placeholder="Enter Permanent City"
                  className="form-control"
                  value={permanentCity}
                  onChange={(e) => setPermanentCity(e.target.value)}
                />
                {errors.permanentCity && <small className="text-danger">{errors.permanentCity}</small>}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Permanent Pincode</label>
                <input
                  type="number"
                  placeholder="Enter Permanent Pincode"
                  className="form-control"
                  value={permanentPincode}
                  onChange={(e) => setPermanentPincode(e.target.value)}
                />
                {errors.permanentPincode && <small className="text-danger">{errors.permanentPincode}</small>}
              </div>
            </div>

            <h3 className="text-primary mb-3">Contact Information:</h3>

            <div className="form-group mb-3">
              <label className="form-label">Mobile</label>
              <input
                type="number"
                placeholder="Enter Mobile Number"
                className="form-control"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
            </div>

            {/* Emergency Contact Section */}
            <h4 className="text-primary mb-3">Emergency Contact</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Emergency Contact Name</label>
                    <input
                      type="text"
                      placeholder="Enter Emergency Contact Name"
                      className="form-control"
                      value={emergencyContactName}
                      onChange={(e) => setEmergencyContactName(e.target.value)}
                    />
                    {errors.emergencyContactName && <small className="text-danger">{errors.emergencyContactName}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Emergency Mobile</label>
                    <input
                      type="number"
                      placeholder="Enter Emergency Mobile No"
                      className="form-control"
                      value={emergencyMobile}
                      onChange={(e) => setEmergencyMobile(e.target.value)}
                    />
                    {errors.emergencyMobile && <small className="text-danger">{errors.emergencyMobile}</small>}
                  </div>
                </div>

                {/* Professional Details Section */}
                <h4 className="text-primary mb-3">Professional Details</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Company Email</label>
                    <input
                      type="email"
                      placeholder="Enter Company Email"
                      className="form-control"
                      value={companyMail}
                      onChange={(e) => setCompanyMail(e.target.value)}
                    />
                    {errors.companyMail && <small className="text-danger">{errors.companyMail}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Office Phone Number</label>
                    <input
                      type="number"
                      placeholder="Enter Office Phone No"
                      className="form-control"
                      value={officePhoneNo}
                      onChange={(e) => setOfficePhoneNo(e.target.value)}
                    />
                    {errors.officePhoneNo && <small className="text-danger">{errors.officePhoneNo}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Office Location</label>
                    <input
                      type="text"
                      placeholder="Enter Office City"
                      className="form-control"
                      value={officeCity}
                      onChange={(e) => setOfficeCity(e.target.value)}
                    />
                    {errors.officeCity && <small className="text-danger">{errors.officeCity}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Reporting Manager's Email</label>
                    <input
                      type="email"
                      placeholder="Enter Manager Email"
                      className="form-control"
                      value={reportingManagerMail}
                      onChange={(e) => setReportingManagerMail(e.target.value)}
                    />
                    {errors.reportingManagerMail && <small className="text-danger">{errors.reportingManagerMail}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">HR Email</label>
                    <input
                      type="email"
                      placeholder="Enter HR Email"
                      className="form-control"
                      value={hrMail}
                      onChange={(e) => setHrMail(e.target.value)}
                    />
                    {errors.hrMail && <small className="text-danger">{errors.hrMail}</small>}
                  </div>
                </div>

                {/* Previous Employment Section */}
                <h4 className="text-primary mb-3">Previous Employment</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Previous Company</label>
                    <input
                      type="text"
                      placeholder="Enter Previous Company"
                      className="form-control"
                      value={previousCompany}
                      onChange={(e) => setPreviousCompany(e.target.value)}
                    />
                    {errors.previousCompany && <small className="text-danger">{errors.previousCompany}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Previous Company Join Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={previousCompanyJoinDate}
                      onChange={(e) => setPreviousCompanyJoinDate(e.target.value)}
                    />
                    {errors.previousCompanyJoinDate && <small className="text-danger">{errors.previousCompanyJoinDate}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Previous Company End Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={previousCompanyEndDate}
                      onChange={(e) => setPreviousCompanyEndDate(e.target.value)}
                    />
                    {errors.previousCompanyEndDate && <small className="text-danger">{errors.previousCompanyEndDate}</small>}
                  </div>
                </div>

                {/* Project Details Section */}
                <h4 className="text-primary mb-3">Project Details</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Project Code</label>
                    <input
                      type="text"
                      placeholder="Enter Project Code"
                      className="form-control"
                      value={projectCode}
                      onChange={(e) => setProjectCode(e.target.value)}
                    />
                    {errors.projectCode && <small className="text-danger">{errors.projectCode}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Project Start Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={projectStartDate}
                      onChange={(e) => setProjectStartDate(e.target.value)}
                    />
                    {errors.projectStartDate && <small className="text-danger">{errors.projectStartDate}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Project End Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={projectEndDate}
                      onChange={(e) => setProjectEndDate(e.target.value)}
                    />
                    {errors.projectEndDate && <small className="text-danger">{errors.projectEndDate}</small>}
                  </div>
                </div>

                {/* ID Details Section */}
                <h4 className="text-primary mb-3">ID Details</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">PAN Card Number</label>
                    <input
                      type="text"
                      placeholder="Enter PAN Card Number"
                      className="form-control"
                      value={panCardNumber}
                      onChange={(e) => setPanCardNumber(e.target.value)}
                    />
                    {errors.panCardNumber && <small className="text-danger">{errors.panCardNumber}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Aadhar Card Number</label>
                    <input
                      type="number"
                      placeholder="Enter Aadhar Card Number"
                      className="form-control"
                      value={aadharCardNumber}
                      onChange={(e) => setAadharCardNumber(e.target.value)}
                    />
                    {errors.aadharCardNumber && <small className="text-danger">{errors.aadharCardNumber}</small>}
                  </div>

                  
                </div>
                <h3 className="text-secondary mb-4">Bank Details</h3>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Bank Name</label>
                    <input
                      type="text"
                      placeholder="Enter Bank Name"
                      className="form-control"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                    />
                    {errors.bankName && <small className="text-danger">{errors.bankName}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">IFSC Code</label>
                    <input
                      type="text"
                      placeholder="Enter IFSC Code"
                      className="form-control"
                      value={ifscCode}
                      onChange={(e) => setIfscCode(e.target.value)}
                    />
                    {errors.ifscCode && <small className="text-danger">{errors.ifscCode}</small>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label className="form-label">Branch Name</label>
                    <input
                      type="text"
                      placeholder="Enter Branch Name"
                      className="form-control"
                      value={bankBranch}
                      onChange={(e) => setBankBranch(e.target.value)}
                    />
                    {errors.bankBranch && <small className="text-danger">{errors.bankBranch}</small>}
                  </div>
                </div>

                {/* Salary Details Section */}
                <h3 className="text-secondary mb-4">Salary Details</h3>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Basic Salary</label>
                    <input
                      type="number"
                      placeholder="Enter Basic Salary"
                      className="form-control"
                      value={basicSalary}
                      onChange={(e) => setBasicSalary(e.target.value)}
                    />
                    {errors.basicSalary && <small className="text-danger">{errors.basicSalary}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Bonus</label>
                    <input
                      type="number"
                      placeholder="Enter Bonus"
                      className="form-control"
                      value={bonus}
                      onChange={(e) => setBonus(e.target.value)}
                    />
                    {errors.bonus && <small className="text-danger">{errors.bonus}</small>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">House Rent Allowance</label>
                    <input
                      type="number"
                      placeholder="Enter HRA"
                      className="form-control"
                      value={houseRentAllowance}
                      onChange={(e) => setHouseRentAllowance(e.target.value)}
                    />
                    {errors.houseRentAllowance && <small className="text-danger">{errors.houseRentAllowance}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Medical Allowance</label>
                    <input
                      type="number"
                      placeholder="Enter Medical Allowance"
                      className="form-control"
                      value={medicalAllowance}
                      onChange={(e) => setMedicalAllowance(e.target.value)}
                    />
                    {errors.medicalAllowance && <small className="text-danger">{errors.medicalAllowance}</small>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Travel Allowance</label>
                    <input
                      type="number"
                      placeholder="Enter Travel Allowance"
                      className="form-control"
                      value={travelAllowance}
                      onChange={(e) => setTravelAllowance(e.target.value)}
                    />
                    {errors.travelAllowance && <small className="text-danger">{errors.travelAllowance}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">PF</label>
                    <input
                      type="number"
                      placeholder="Enter PF"
                      className="form-control"
                      value={pf}
                      onChange={(e) => setPf(e.target.value)}
                    />
                    {errors.pf && <small className="text-danger">{errors.pf}</small>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Tax</label>
                    <input
                      type="number"
                      placeholder="Enter Tax"
                      className="form-control"
                      value={tax}
                      onChange={(e) => setTax(e.target.value)}
                    />
                    {errors.tax && <small className="text-danger">{errors.tax}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">CTC</label>
                    <input
                      type="number"
                      placeholder="Enter CTC"
                      className="form-control"
                      value={ctc}
                      onChange={(e) => setCtc(e.target.value)}
                    />
                    {errors.ctc && <small className="text-danger">{errors.ctc}</small>}
                  </div>
                  </div>
                  <br></br> <br></br>

                




                <div className="d-flex justify-content-between">
                  <button className="btn btn-success btn-lg" onClick={(e) => saveOrUpdateEmployee(e)}>
                    {id ? 'Update' : 'Submit'}
                  </button>
                  <Link to="/employees" className="btn btn-danger btn-lg">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;

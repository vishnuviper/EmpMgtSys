
package com.example.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

import jakarta.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {

	 //Personal Details

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
	
	
	@OneToOne(cascade = CascadeType.ALL,fetch=FetchType.LAZY)
	@JoinColumn(name = "login_id", referencedColumnName = "id", insertable = false, updatable = false)
	private EmployeeLogin employeeLogin;

	public EmployeeLogin getEmployeeLogin() {
		return employeeLogin;
	}

	public void setEmployeeLogin(EmployeeLogin employeeLogin) {
		this.employeeLogin = employeeLogin;
	}

	@Column(name="employee_code")
	private long employeeCode;
	
	@Column(name="employee_First_Name")
	private String employeeFirstName;
    
    @Column(name="employee_Last_Name")
	private String employeeLastName;
	
    @Column(name = "email_id")
    private String emailId;
	
    @Column(name="date_of_birth")
	private Date dateOfBirth;
    
    @Column(name="gender")
	private String gender;
    
    @Column(name="age")
	private int age;
    
    @Column(name="position")
    private String position;
	
    @Column(name="current_address_line1")
	private String currentAddressLine1;
    
    @Column(name="current_address_line2")
	private String currentAddressLine2;
    
    @Column(name="current_city")
	private String currentCity;
    
    @Column(name="current_pincode")
	private long currentPincode;
    
    @Column(name="permanent_Address_Line1")
	private String permanentAddressLine1;
    
    @Column(name="permanent_Address_Line2")
	private String permanentAddressLine2;
    
    @Column(name="permanent_City")
	private String permanentCity;
    
    @Column(name="permanent_Pincode")
	private long  permanentPincode;
    
    @Column(name="mobile")
	private String mobile;
    
    @Column(name="emergency_Contact_Name")
	private String emergencyContactName;
    
    @Column(name="emergency_Mobile")
	private String emergencyMobile;
    
    @Column(name="company_Mail")
	private String companyMail;
    
    @Column(name="office_Phone_No")
	private String officePhoneNo;
    
    @Column(name="office_City")
	private String officeCity;
    
    @Column(name="reporting_Manager_Mail")
	private String reportingManagerMail;
    
    @Column(name="hrMail")
	private String hrMail;
    
    @Column(name="previous_Company")
	private String previousCompany;
    
    @Column(name="previous_Company_Join_Date")
	private String previousCompanyJoinDate;
    
    @Column(name="previous_Company_End_Date")
	private String previousCompanyEndDate;
    
    @Column(name="project_Code")
	private String projectCode;
    
    @Column(name="project_Start_Date")
	private Date projectStartDate;
    
    @Column(name="project_End_Date")
	private Date projectEndDate;
    
    @Column(name="pan_Card_Number")
	private String panCardNumber;
    
    @Column(name="aadhar_Card_Number")
	private String aadharCardNumber;
    
    @Column(name="bank_Name")
	private String bankName;
    
    @Column(name="ifscCode")
	private String ifscCode;
    
    @Column(name="bank_Branch")
	private String bankBranch;
    
    @Column(name="basic_Salary")
	private double basicSalary;
    
    @Column(name="bonus")
	private double bonus;
    
    @Column(name="house_Rent_Allowance")
	private double houseRentAllowance;
    
    @Column(name="medicalAllowance")
	private double medicalAllowance;
    
    @Column(name="travel_Allowance")
	private double travelAllowance;
    
    @Column(name="PF")
	private double PF;
    
    @Column(name="tax")
	private double tax;
    
    @Column(name="ctc")
    private double ctc;

    //Getters and Setters
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getEmployeeCode() {
		return employeeCode;
	}

	public void setEmployeeCode(long employeeCode) {
		this.employeeCode = employeeCode;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getCurrentAddressLine1() {
		return currentAddressLine1;
	}

	public void setCurrentAddressLine1(String currentAddressLine1) {
		this.currentAddressLine1 = currentAddressLine1;
	}

	public String getCurrentAddressLine2() {
		return currentAddressLine2;
	}

	public void setCurrentAddressLine2(String currentAddressLine2) {
		this.currentAddressLine2 = currentAddressLine2;
	}

	public String getCurrentCity() {
		return currentCity;
	}

	public void setCurrentCity(String currentCity) {
		this.currentCity = currentCity;
	}

	public long getCurrentPincode() {
		return currentPincode;
	}

	public void setCurrentPincode(long currentPincode) {
		this.currentPincode = currentPincode;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getEmployeeFirstName() {
		return employeeFirstName;
	}

	public void setEmployeeFirstName(String employeeFirstName) {
		this.employeeFirstName = employeeFirstName;
	}

	public String getEmployeeLastName() {
		return employeeLastName;
	}

	public void setEmployeeLastName(String employeeLastName) {
		this.employeeLastName = employeeLastName;
	}

	public String getPermanentAddressLine1() {
		return permanentAddressLine1;
	}

	public void setPermanentAddressLine1(String permanentAddressLine1) {
		this.permanentAddressLine1 = permanentAddressLine1;
	}

	public String getPermanentAddressLine2() {
		return permanentAddressLine2;
	}

	public void setPermanentAddressLine2(String permanentAddressLine2) {
		this.permanentAddressLine2 = permanentAddressLine2;
	}

	public String getPermanentCity() {
		return permanentCity;
	}

	public void setPermanentCity(String permanentCity) {
		this.permanentCity = permanentCity;
	}

	public long getPermanentPincode() {
		return permanentPincode;
	}

	public void setPermanentPincode(long permanentPincode) {
		this.permanentPincode = permanentPincode;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getEmergencyContactName() {
		return emergencyContactName;
	}

	public void setEmergencyContactName(String emergencyContactName) {
		this.emergencyContactName = emergencyContactName;
	}

	public String getEmergencyMobile() {
		return emergencyMobile;
	}

	public void setEmergencyMobile(String emergencyMobile) {
		this.emergencyMobile = emergencyMobile;
	}

	public String getCompanyMail() {
		return companyMail;
	}

	public void setCompanyMail(String companyMail) {
		this.companyMail = companyMail;
	}

	public String getOfficePhoneNo() {
		return officePhoneNo;
	}

	public void setOfficePhoneNo(String officePhoneNo) {
		this.officePhoneNo = officePhoneNo;
	}

	public String getOfficeCity() {
		return officeCity;
	}

	public void setOfficeCity(String officeCity) {
		this.officeCity = officeCity;
	}

	public String getReportingManagerMail() {
		return reportingManagerMail;
	}

	public void setReportingManagerMail(String reportingManagerMail) {
		this.reportingManagerMail = reportingManagerMail;
	}

	public String getHrMail() {
		return hrMail;
	}

	public void setHrMail(String hrMail) {
		this.hrMail = hrMail;
	}

	public String getPreviousCompany() {
		return previousCompany;
	}

	public void setPreviousCompany(String previousCompany) {
		this.previousCompany = previousCompany;
	}

	public String getPreviousCompanyJoinDate() {
		return previousCompanyJoinDate;
	}

	public void setPreviousCompanyJoinDate(String previousCompanyJoinDate) {
		this.previousCompanyJoinDate = previousCompanyJoinDate;
	}

	public String getPreviousCompanyEndDate() {
		return previousCompanyEndDate;
	}

	public void setPreviousCompanyEndDate(String previousCompanyEndDate) {
		this.previousCompanyEndDate = previousCompanyEndDate;
	}

	public String getProjectCode() {
		return projectCode;
	}

	public void setProjectCode(String projectCode) {
		this.projectCode = projectCode;
	}

	public Date getProjectStartDate() {
		return projectStartDate;
	}

	public void setProjectStartDate(Date projectStartDate) {
		this.projectStartDate = projectStartDate;
	}

	public Date getProjectEndDate() {
		return projectEndDate;
	}

	public void setProjectEndDate(Date projectEndDate) {
		this.projectEndDate = projectEndDate;
	}

	public String getPanCardNumber() {
		return panCardNumber;
	}

	public void setPanCardNumber(String panCardNumber) {
		this.panCardNumber = panCardNumber;
	}

	public String getAadharCardNumber() {
		return aadharCardNumber;
	}

	public void setAadharCardNumber(String aadharCardNumber) {
		this.aadharCardNumber = aadharCardNumber;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public String getIfscCode() {
		return ifscCode;
	}

	public void setIfscCode(String iFSC_Code) {
		ifscCode = iFSC_Code;
	}

	public String getBankBranch() {
		return bankBranch;
	}

	public void setBankBranch(String bankBranch) {
		this.bankBranch = bankBranch;
	}

	public double getBasicSalary() {
		return basicSalary;
	}

	public void setBasicSalary(double basicSalary) {
		this.basicSalary = basicSalary;
	}

	public double getBonus() {
		return bonus;
	}

	public void setBonus(double bonus) {
		this.bonus = bonus;
	}

	public double getHouseRentAllowance() {
		return houseRentAllowance;
	}

	public void setHouseRentAllowance(double houseRentAllowance) {
		this.houseRentAllowance = houseRentAllowance;
	}

	public double getMedicalAllowance() {
		return medicalAllowance;
	}

	public void setMedicalAllowance(double medicalAllowance) {
		this.medicalAllowance = medicalAllowance;
	}

	public double getTravelAllowance() {
		return travelAllowance;
	}

	public void setTravelAllowance(double travelAllowance) {
		this.travelAllowance = travelAllowance;
	}

	public double getPF() {
		return PF;
	}

	public void setPF(double pF) {
		PF = pF;
	}

	public double getTax() {
		return tax;
	}

	public void setTax(double tax) {
		this.tax = tax;
	}

	public double getCtc() {
		return ctc;
	}

	public void setCtc(double cTC) {
		ctc = cTC;
	}

	public Object getPassword() {
		// TODO Auto-generated method stub
		return null;
	}

	public void setPassword(Object password) {
		// TODO Auto-generated method stub
		
	}

	
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}

}


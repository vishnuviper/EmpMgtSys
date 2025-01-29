package com.example.springboot.controller;

import com.example.springboot.exception.ResourceNotFoundException;

import com.example.springboot.model.Employee;
import com.example.springboot.model.EmployeeLogin;
import com.example.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/feb9/employees")
public class EmployeeController {

	//private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);
	@Autowired
	private EmployeeRepository employeeRepository;

	@GetMapping
	public Iterable<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}

	// build create employee REST API
	@PostMapping
	public Employee createEmployee(@RequestBody Employee employee) {
		EmployeeLogin empLogin=new EmployeeLogin();
		//empLogin.setId(employee.getId());
		empLogin.setUsername(employee.getEmployeeCode());
		empLogin.setPassword(employee.getEmployeeCode()+"_"+employee.getEmployeeLastName());
		empLogin.setPosition(employee.getPosition());
		employee.setEmployeeLogin(empLogin);

	
		return employeeRepository.save(employee);
	}
   
   

	@GetMapping("{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable long id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:" + id));
		return ResponseEntity.ok(employee);
		
	}

	@PutMapping("{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employeeDetails) {
		Employee updateEmployee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

		updateEmployee.setEmployeeFirstName(employeeDetails.getEmployeeFirstName());
		updateEmployee.setEmployeeLastName(employeeDetails.getEmployeeLastName());
		updateEmployee.setEmployeeCode(employeeDetails.getEmployeeCode());
		updateEmployee.setEmailId(employeeDetails.getEmailId());
		updateEmployee.setDateOfBirth(employeeDetails.getDateOfBirth());
		updateEmployee.setGender(employeeDetails.getGender());
		updateEmployee.setAge(employeeDetails.getAge());
		updateEmployee.setCurrentAddressLine1(employeeDetails.getCurrentAddressLine1());
		updateEmployee.setCurrentAddressLine2(employeeDetails.getCurrentAddressLine2());
		updateEmployee.setCurrentCity(employeeDetails.getCurrentCity());
		updateEmployee.setCurrentPincode(employeeDetails.getCurrentPincode());
		updateEmployee.setPosition(employeeDetails.getPosition());
		updateEmployee.setEmployeeFirstName(employeeDetails.getEmployeeFirstName());
		updateEmployee.setEmployeeLastName(employeeDetails.getEmployeeLastName());
		updateEmployee.setPermanentAddressLine1(employeeDetails.getPermanentAddressLine1());
		updateEmployee.setPermanentAddressLine2(employeeDetails.getPermanentAddressLine2());
		updateEmployee.setPermanentCity(employeeDetails.getPermanentCity());
		updateEmployee.setPermanentPincode(employeeDetails.getPermanentPincode());
		updateEmployee.setMobile(employeeDetails.getMobile());
		updateEmployee.setEmergencyContactName(employeeDetails.getEmergencyContactName());
		updateEmployee.setEmergencyMobile(employeeDetails.getEmergencyMobile());
		updateEmployee.setCompanyMail(employeeDetails.getCompanyMail());
		updateEmployee.setOfficePhoneNo(employeeDetails.getOfficePhoneNo());
		updateEmployee.setOfficeCity(employeeDetails.getOfficeCity());
		updateEmployee.setReportingManagerMail(employeeDetails.getReportingManagerMail());
		updateEmployee.setHrMail(employeeDetails.getHrMail());
		updateEmployee.setPreviousCompany(employeeDetails.getPreviousCompany());
		updateEmployee.setPreviousCompanyJoinDate(employeeDetails.getPreviousCompanyJoinDate());
		updateEmployee.setPreviousCompanyEndDate(employeeDetails.getPreviousCompanyEndDate());
		updateEmployee.setProjectCode(employeeDetails.getProjectCode());
		updateEmployee.setProjectStartDate(employeeDetails.getProjectStartDate());
		updateEmployee.setProjectEndDate(employeeDetails.getProjectEndDate());
		updateEmployee.setPanCardNumber(employeeDetails.getPanCardNumber());
		updateEmployee.setAadharCardNumber(employeeDetails.getAadharCardNumber());
		updateEmployee.setBankName(employeeDetails.getBankName());
		updateEmployee.setIfscCode(employeeDetails.getIfscCode());
		updateEmployee.setBankBranch(employeeDetails.getBankBranch());
		updateEmployee.setBasicSalary(employeeDetails.getBasicSalary());
		updateEmployee.setBonus(employeeDetails.getBonus());
		updateEmployee.setHouseRentAllowance(employeeDetails.getHouseRentAllowance());
		updateEmployee.setMedicalAllowance(employeeDetails.getMedicalAllowance());
		updateEmployee.setTravelAllowance(employeeDetails.getTravelAllowance());
		updateEmployee.setPF(employeeDetails.getPF());
		updateEmployee.setTax(employeeDetails.getTax());
		updateEmployee.setCtc(employeeDetails.getCtc());

		employeeRepository.save(updateEmployee);

		return ResponseEntity.ok(updateEmployee);
	}

	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id) {

		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

		employeeRepository.delete(employee);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);

	}

}

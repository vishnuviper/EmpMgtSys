package com.example.springboot.controller;



import com.example.springboot.model.EmployeeLogin;
import com.example.springboot.repository.LoginRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/feb9/employee_login")
public class AuthController {

	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

	@Autowired
	private LoginRepository loginRepository;


	@PostMapping
	public ResponseEntity<?> login(@RequestBody EmployeeLogin employeeLogin) {

		logger.info("Login attempt with username: " + employeeLogin.getUsername());

		Optional<EmployeeLogin> optionalLogin = loginRepository.findByUsername(employeeLogin.getUsername());

		if (optionalLogin.isPresent() && optionalLogin.get().getPassword().equals(employeeLogin.getPassword())) {
			//Optional<Employee> OptionalEmployee=employeeRepository.findById(optionalLogin.get().getId());
			//Employee employee=OptionalEmployee.get();
			return ResponseEntity.ok(optionalLogin.get());
 
		} else {

			logger.warn("Invalid login attempt with username:" + employeeLogin.getUsername());
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Inv alid credentials");

		}

	}

}
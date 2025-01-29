package com.example.springboot.repository;

import java.util.Optional;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;


import com.example.springboot.model.EmployeeLogin;
@SpringBootApplication
@ComponentScan(basePackages = "com.example")  
@EnableJpaRepositories(basePackages = "com.example.repository")  
public interface LoginRepository extends CrudRepository<EmployeeLogin, Long> {

	Optional<EmployeeLogin> findByUsername(long employeeCode);
}

package com.example.springboot.repository;

import java.util.Optional;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.springboot.model.Employee;



@SpringBootApplication
@ComponentScan(basePackages = "com.example")  
@EnableJpaRepositories(basePackages = "com.example.repository")  

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
	Optional<Employee> findByEmployeeCode(long employeeCode);
    
}


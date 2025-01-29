package com.example.springboot.model;

import jakarta.persistence.*;


@Entity
@Table(name="Employee_Login")
public class EmployeeLogin {
	
	
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
	
	@OneToOne(mappedBy = "employeeLogin")
    private Employee employee;
	
	@Column(name="username")
	private long username;
	
	@Column(name="password")
	private String password;
	
	@Column(name="position")
	private String position;
		
	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getUsername() {
		return username;
	}

	public void setUsername(long username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	
	
	

	
}

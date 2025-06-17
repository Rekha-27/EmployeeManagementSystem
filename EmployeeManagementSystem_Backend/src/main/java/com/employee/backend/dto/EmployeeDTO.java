package com.employee.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDTO {
	private long id;
	private String firstName;
	private String lastName;
	private String email;
	private String department;
	private long salary;
	private String gender;
}

package com.employee.backend.mapper;

import com.employee.backend.dto.EmployeeDTO;
import com.employee.backend.model.Employee;

public class EmployeeMapper {
	public static EmployeeDTO mapToEmployeeDTO(Employee employee) {
		return new EmployeeDTO(employee.getId(), employee.getFirstName(), employee.getLastName(), employee.getEmail(),
				employee.getDepartment(), employee.getSalary(), employee.getGender()

		);
	}

	public static Employee mapToEmployee(EmployeeDTO empdto) {
		return new Employee(empdto.getId(), empdto.getFirstName(), empdto.getLastName(), empdto.getEmail(),
				empdto.getDepartment(), empdto.getSalary(), empdto.getGender());
	}
}

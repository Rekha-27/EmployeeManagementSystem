package com.employee.backend.service;

import java.util.List;

import com.employee.backend.dto.EmployeeDTO;

public interface EmployeeService {
	EmployeeDTO createEmployee(EmployeeDTO empdto);
	EmployeeDTO getEmployeeById(long empdtId);
	List<EmployeeDTO> getAllEmployees();
	EmployeeDTO updateEmployee(long empid,EmployeeDTO updateEmployee);
	void deleteEmployee(long empId);
}

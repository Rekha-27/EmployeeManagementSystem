package com.employee.backend.service;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.employee.backend.dto.EmployeeDTO;
import com.employee.backend.exception.ResponseNotFoundException;
import com.employee.backend.mapper.EmployeeMapper;
import com.employee.backend.model.Employee;
import com.employee.backend.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
@Service
@AllArgsConstructor
@Transactional
public class EmployeeServiceImplement implements EmployeeService{
	@Autowired
	private EmployeeRepository emprepo;

	@Override
	public EmployeeDTO createEmployee(EmployeeDTO empdto) {
		Employee emp= EmployeeMapper.mapToEmployee(empdto);
		Employee employee = emprepo.save(emp);
		return EmployeeMapper.mapToEmployeeDTO(employee);
	}

	@Override
	public EmployeeDTO getEmployeeById(long empdtId) {
		 Employee employee = emprepo.findById(empdtId)
		 .orElseThrow(()-> new ResponseNotFoundException("Employee Not found with the given id "+empdtId));
		return EmployeeMapper.mapToEmployeeDTO(employee);
	}

	@Override
	public List<EmployeeDTO> getAllEmployees() {
		//List<EmployeeDTO> empdtlist= new ArrayList<EmployeeDTO>();
		List<Employee> employlist = emprepo.findAll();
		//employlist.forEach(emp->empdtlist.add(EmployeeMapper.mapToEmployeeDTO(emp)));
		return employlist.stream().map((employee)->EmployeeMapper.mapToEmployeeDTO(employee))
				.collect(Collectors.toList());
	}

	@Override
	public EmployeeDTO updateEmployee(long empid, EmployeeDTO updateEmployee) {
		 Employee employee= emprepo.findById(empid)
				 .orElseThrow(()-> new ResponseNotFoundException("Employee Not found with the given id "+empid));
		 employee.setFirstName(updateEmployee.getFirstName());
		 employee.setLastName(updateEmployee.getLastName());
		 employee.setEmail(updateEmployee.getEmail());
		 employee.setDepartment(updateEmployee.getDepartment());
		 employee.setSalary(updateEmployee.getSalary());
		 employee.setGender(updateEmployee.getGender());
		 Employee emp = emprepo.save(employee);
		return EmployeeMapper.mapToEmployeeDTO(emp);
	}

	@Override
	public void deleteEmployee(long empId) {
		 Employee employee= emprepo.findById(empId)
				 .orElseThrow(()-> new ResponseNotFoundException("Employee Not found with the given id "+empId));
		 emprepo.delete(employee);
		
	}

	

}

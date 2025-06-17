package com.employee.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.employee.backend.dto.EmployeeDTO;
import com.employee.backend.service.EmployeeService;
import lombok.AllArgsConstructor;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/employees")
public class EmployeeController {
	@Autowired
	private EmployeeService empservice;
	@PostMapping
	public ResponseEntity<EmployeeDTO>  createEmployee(@RequestBody EmployeeDTO empdto) {
		 EmployeeDTO employeedto = empservice.createEmployee(empdto);
		 return new ResponseEntity<EmployeeDTO>(employeedto, HttpStatus.CREATED);
	}
	@GetMapping("{id}")
	public ResponseEntity<EmployeeDTO> getEmployeeById(@PathVariable long id){
		EmployeeDTO empdto= empservice.getEmployeeById(id);
		return ResponseEntity.ok(empdto);
	}
	@GetMapping
	public ResponseEntity<List<EmployeeDTO>> getAllEmloyees(){
		List<EmployeeDTO> allEmployees = empservice.getAllEmployees();
		return ResponseEntity.ok(allEmployees);
	}
	@PutMapping("{id}")
	public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable("id") long empId,@RequestBody EmployeeDTO empdto){
		EmployeeDTO employee = empservice.updateEmployee(empId, empdto);
		return ResponseEntity.ok(employee);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable("id") long empId){
		System.out.println(empId+"------------------------");
		empservice.deleteEmployee(empId);
		return ResponseEntity.ok("Employee deleted Successfully");
	}
}

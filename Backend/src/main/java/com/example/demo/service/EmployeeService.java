package com.example.demo.service;


import com.example.demo.dao.EmployeeRepo;
import com.example.demo.entity.Employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepo repo;

	public List<Employee> getAllEmployee() {
		return repo.findAll();
	}

	public void addEmployee(Employee obj) throws Exception {
		Employee tempObj = repo.findById(obj.getId()).orElse(null);
		if(tempObj!=null) {
			throw new Exception("Employee already exists");
		}
		repo.save(obj);
	}
}

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
}

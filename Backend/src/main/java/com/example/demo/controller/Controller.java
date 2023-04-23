package com.example.demo.controller;

import java.util.List;
import java.util.UUID;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Employee;
import com.example.demo.entity.Template;
import com.example.demo.service.EmployeeService;
import com.example.demo.service.TemplateService;

@RestController
public class Controller {
	
	@Autowired
	private TemplateService tservice;
	
	@Autowired
	private EmployeeService eservice;
	
	@PostMapping("/new")
	public Template saveTemplate(@RequestBody Template template) throws Exception {
		return tservice.saveTemplate(template);
	}
	
	@GetMapping("/{id}/fetch")
	public Template fetchTemplate(@PathVariable("id") UUID id) throws Exception {
		return tservice.fetchTemplate(id);
	}
	
	@PutMapping("/{id}/update")
	public Template updateTemplate(@PathVariable("id") UUID id,@RequestBody Template template) throws Exception {
		return tservice.updateTemplate(id,template);
	}
	
	@DeleteMapping("/{id}/delete")
	public String deleteTemplate(@PathVariable("id") UUID id) throws Exception {
		return tservice.deleteTemplate(id);
	}
	
	@GetMapping("/getAllEmployee")
	public List<Employee> getAllEmployee(){
		return eservice.getAllEmployee();
	}
	
	@DeleteMapping("/deleteAll")
	public String deleteAllTemplate() {
		return tservice.deleteAllTemplate();
	}
	
	@GetMapping("/fillData")
	public void fillData() throws Exception {
		Employee obj = new Employee();
		obj = new Employee(UUID.randomUUID(),"chandresh","chandreshgourd@gmail.com","Programmer Analyst Trainee",4.50,new Date(),new Date());
		eservice.addEmployee(obj);
		obj = new Employee(UUID.randomUUID(),"goudChandresh","gourd13.8.2001@gmail.com","Programmer Analyst",7.12,new Date(),new Date());
		eservice.addEmployee(obj);
	}
	
	@GetMapping("/getAll")
	public List<Template> getAllTemplate(){
		return tservice.getAllTemplate();
	}

}

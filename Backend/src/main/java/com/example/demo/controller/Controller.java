package com.example.demo.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	@CrossOrigin(origins="http://localhost:4200")
	public Template saveTemplate(@RequestBody Template template) throws Exception {
		return tservice.saveTemplate(template);
	}
	
	@GetMapping("/{id}/fetch")
	@CrossOrigin(origins="http://localhost:4200")
	public Template fetchTemplate(@PathVariable("id") UUID id) throws Exception {
		return tservice.fetchTemplate(id);
	}
	
	@PutMapping("/{id}/update")
	@CrossOrigin(origins="http://localhost:4200")
	public Template updateTemplate(@PathVariable("id") UUID id,@RequestBody Template template) throws Exception {
		return tservice.updateTemplate(id,template);
	}
	
	@DeleteMapping("/{id}/delete")
	@CrossOrigin(origins="http://localhost:4200")
	public String deleteTemplate(@PathVariable("id") UUID id) throws Exception {
		return tservice.deleteTemplate(id);
	}
	
	@GetMapping("/getAllEmployee")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Employee> getAllEmployee(){
		return eservice.getAllEmployee();
	}
	
	@DeleteMapping("/deleteAll")
	@CrossOrigin(origins="http://localhost:4200")
	public String deleteAllTemplate() {
		return tservice.deleteAllTemplate();
	}
	
	@GetMapping("/fillData")
	@CrossOrigin(origins="http://localhost:4200")
	public void fillData() throws Exception {
		Employee obj = new Employee();
		obj = new Employee(UUID.randomUUID(),"Asutosh Pradhan","anuragp3487@gmail.com","Programmer Analyst ",7.21,new Date(),new Date(),new Date());
		eservice.addEmployee(obj);
//		obj = new Employee(UUID.randomUUID(),"name","mail","Programmer Analyst",7.12,new Date(),new Date(),new Date());
//		//change value at your choice
//		eservice.addEmployee(obj);
		obj = new Employee(UUID.randomUUID(),"Abhisek Rout","email","Programmer Analyst",7.12,new Date(),new Date(), new Date());
		eservice.addEmployee(obj);
	}
	
	@GetMapping("/{id}/getObject")
	@CrossOrigin(origins="http://localhost:4200")
	public String getObject(@PathVariable("id") UUID id) throws Exception {
		return tservice.getObject(id);
	}
	
	@GetMapping("/getAll")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Template> getAllTemplate(){
//		List<Template> tempObj = tservice.getAllTemplate();
//		List<String> list=new ArrayList<>();
//		tempObj.forEach(temp->{
//			JSONObject tempJson = new JSONObject();
//			tempJson.put("id", temp.getId());
//			list.add(tempJson.toString());
//		});
		return tservice.getAllTemplate();
	}

}

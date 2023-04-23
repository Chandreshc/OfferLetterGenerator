package com.example.demo.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Template;
import com.example.demo.service.TemplateService;

@RestController
public class Controller {
	
	@Autowired
	private TemplateService tservice;
	
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
	

}

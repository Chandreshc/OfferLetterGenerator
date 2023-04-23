package com.example.demo.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.TemplateRepo;
import com.example.demo.entity.Template;

@Service
public class TemplateService {
	
	@Autowired
	TemplateRepo repo;

	public Template saveTemplate(Template template) throws Exception {
		Template tempObj = repo.findByName(template.getName());
		if(tempObj!=null) {
			throw new Exception("A template with same name exists.");
		}
		return repo.save(template);
	}

	public Template fetchTemplate(UUID id) throws Exception {
		Template tempObj = repo.findById(id).orElse(null);
		if(tempObj==null) {
			throw new Exception("Template didn't exists");
		}
		return tempObj;
	}

	public Template updateTemplate(UUID id, Template template) throws Exception {
		Template tempObj = repo.findById(id).orElse(null);
		int temp;
		if(tempObj==null) {
			throw new Exception("Template didn't exists");
		}
		if(tempObj.getName()!=null) {
			temp = repo.updateName(id, template.getName());
		}
		if(tempObj.getTemplateObj()!=null) {
			temp = repo.updateTemplateObj(id, template.getTemplateObj());
		}
		if(tempObj.getCreationDate()!=null) {
			temp = repo.updateCreationDate(id, template.getCreationDate());
		}
		return fetchTemplate(id);
	}

	public String deleteTemplate(UUID id) throws Exception {
		Template tempObj = repo.findById(id).orElse(null);
		if(tempObj==null) {
			throw new Exception("Template didn't exists");
		}
		repo.deleteById(id);
		String success = "Successfully Deleted";
		return "\""+success+"\"";
	}

	public String deleteAllTemplate() {
		repo.deleteAll();
		String success = "Successfully Deleted";
		return "\""+success+"\"";
	}

	public List<Template> getAllTemplate() {
		return repo.findAll();
	}
	
	
}

package com.example.demo.service;

import java.util.HashMap;
import java.util.List;
import java.util.UUID;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.TemplateRepo;
import com.example.demo.entity.Employee;
import com.example.demo.entity.Template;

@Service
public class TemplateService {
	
	@Autowired
	TemplateRepo repo;
	
	@Autowired
	EmployeeService eservice;
	

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
		tempObj = repo.findById(id).orElse(null);
		return repo.findById(id).orElse(null);
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

	@SuppressWarnings({ "unchecked", "deprecation" })
	public String getObject(UUID id) throws Exception {
		List<Employee> list = eservice.getAllEmployee();
		Template tempObj = fetchTemplate(id);
		JSONArray jobj = new JSONArray();
		list.forEach(i->{
			System.out.println(i);
			Template temp = tempObj;
			JSONObject vemp = new JSONObject();
			try {
				//for parsing fabric json object in json object
				vemp = (JSONObject) new JSONParser().parse(temp.getTemplateObj());
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			//for fetching all objects in the current json object to an array
			JSONArray temparr = (JSONArray) vemp.get("objects");
			System.out.println(temparr);
			JSONArray vemparr = new JSONArray();
			temparr.forEach(ele->{
				JSONObject worried = (JSONObject) ele;
				String tempString = (String) worried.get("text");
				if(tempString!=null) {
					tempString = tempString.replace("{name}",i.getName());
					tempString = tempString.replace("{position}",i.getPosition());
					tempString = tempString.replace("{ctc}", String.valueOf(i.getCtc()));
					tempString = tempString.replace("{dateOfOffer}",String.valueOf(i.getDateOfOffer().getDate()));
					tempString = tempString.replace("{acceptanceDate}",String.valueOf(i.getAcceptanceDate().getDate()));
				}
				System.out.println(tempString);
				if(tempString!=null) worried.put("text", tempString);
				vemparr.add(worried);
			});
			vemp.put("objects", vemparr);
			JSONObject tempJson = new JSONObject();
			tempJson.put("gmail", i.getEmail());
			tempJson.put("tempObj", vemp.toJSONString());
			jobj.add(tempJson);
		});
		System.out.println(jobj);
		return jobj.toString();
	}
	
	
	
}

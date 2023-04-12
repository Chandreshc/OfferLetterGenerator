package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.TemplateRepo;

@Service
public class TemplateService {
	
	@Autowired
	TemplateRepo repo;
}

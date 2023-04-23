package com.example.demo.dao;

import java.util.Date;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.Template;

@Repository
public interface TemplateRepo extends JpaRepository<Template, UUID> {

	Template findByName(String name);
	
	@Transactional
	@Modifying
	@Query("update Template t set t.name = :name where t.id = :id")
	public int updateName(@Param("id")UUID id,@Param("name") String name);
	
	@Transactional
	@Modifying
	@Query("update Template t set t.templateObj = :templateObj where t.id = :id")
	public int updateTemplateObj(@Param("id")UUID id,@Param("templateObj") String templateObj);
	
	@Transactional
	@Modifying
	@Query("update Template t set t.creationDate = :creationDate where t.id = :id")
	public int updateCreationDate(@Param("id")UUID id,@Param("creationDate") Date creationDate);
	
}

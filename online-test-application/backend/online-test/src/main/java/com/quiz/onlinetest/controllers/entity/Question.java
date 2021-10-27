package com.quiz.onlinetest.controllers.entity;

import java.util.List;

import lombok.Data;


@Data
public class Question {
	
	private Long id;
	private String question;
	private List<String> options;
	private Integer marks;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public List<String> getOptions() {
		return options;
	}
	public void setOptions(List<String> options) {
		this.options = options;
	}
	public Integer getMarks() {
		return marks;
	}
	public void setMarks(Integer marks) {
		this.marks = marks;
	}

}

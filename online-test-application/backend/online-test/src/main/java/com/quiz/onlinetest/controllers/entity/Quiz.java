package com.quiz.onlinetest.controllers.entity;

import java.util.List;

import lombok.Data;


@Data
public class Quiz {
	
	private Long id;
	private String headerText;
	//in seconds
	private int timeLimit;
	private List<Question> questions;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getHeaderText() {
		return headerText;
	}
	public void setHeaderText(String headerText) {
		this.headerText = headerText;
	}
	public int getTimeLimit() {
		return timeLimit;
	}
	public void setTimeLimit(int timeLimit) {
		this.timeLimit = timeLimit;
	}
	public List<Question> getQuestions() {
		return questions;
	}
	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}
	
	

}

package com.quiz.onlinetest.controllers.entity;

import lombok.Data;

@Data
public class Answers extends Question{
	
	private Integer correctAnswer;
	private String explanation;

}

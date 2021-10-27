package com.quiz.onlinetest.controllers;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.quiz.onlinetest.controllers.entity.Answers;
import com.quiz.onlinetest.controllers.entity.Quiz;

@RestController
public class QuizController {
	@GetMapping("/getQuiz")
	public @ResponseBody Quiz getQuiz() {
		Quiz quiz = null;
		try {
			ObjectMapper mapper = new ObjectMapper();
		    quiz = mapper.readValue(new ClassPathResource("/data/quiz.json").getFile(), Quiz.class);
		} catch (IOException e) {
		    e.printStackTrace();
		}
		return quiz;		
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/getQuizAnswers")
	public @ResponseBody List<Answers> getQuizAnswers() {
		List<Answers> answers = new ArrayList<>();
		try {
			ObjectMapper mapper = new ObjectMapper();
			answers = mapper.readValue(new ClassPathResource("/data/quizAnswers.json").getFile(),List.class);
		} catch (IOException e) {
		    e.printStackTrace();
		}
		return answers;		
	}
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../domain/Quiz';
import {Answers} from '../domain/Answers';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private http: HttpClient
  ) {    }

  private API_URL = "http://localhost:8080";
  private quizUrl =  this.API_URL + "/getQuiz";

  private answersUrl = this.API_URL + "/getQuizAnswers";

  getQuiz(): Observable<Quiz> {
    return this.http.get<Quiz>(this.quizUrl);
  }

  getQuizAnswers(): Observable<Array<Answers>> {
    return this.http.get<Array<Answers>>(this.answersUrl);
  }
}

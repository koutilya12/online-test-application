import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/domain/Question';
import { Quiz } from 'src/app/domain/Quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz : Quiz | undefined;

  currentQuestion : Question | undefined;

  questionIndex =0;

  timer = "";

  endTime = -1;
  testStarted= false;
  showReview: boolean = false;
  timeInterval: any | undefined;
  autoSaveTimeInterval: any | undefined;

  constructor(
    private quizService : QuizService
  ) { }

  ngOnInit(): void {
    this.quizService.getQuiz().subscribe((data: Quiz)=>{
      console.log(data);
      this.quiz = data;
      this.currentQuestion = data.questions[0];
      this.validateAndSetPrevQuiz();
    });
  }

  validateAndSetPrevQuiz() {
    let prevTime = this.getTime();
    let timeLimit = 0;
    if(this.quiz){
       timeLimit = this.quiz.timeLimit != undefined ? Number(this.quiz.timeLimit) : 0;
    }
    if(prevTime){
      console.log((prevTime + timeLimit * 1000));
    }
    if(prevTime && ((prevTime + timeLimit * 1000) > (new Date()).getTime())){
        let prevQuiz = this.getPrevQuiz();
        if(prevQuiz != undefined){
          this.quiz = prevQuiz;
          this.testStarted = !this.testStarted;
          if(this.quiz){
            this.setTimer(timeLimit -((new Date()).getTime() - prevTime) /60000);
            this.timeInterval = setInterval(this.timeIntervalManager, 1000);
            this.autoSaveTimeInterval =  setInterval(this.autoSave, 2000);
            this.currentQuestion = this.quiz.questions[0];
          }
        } 
    }

  }
  getPrevQuiz() : Quiz {
    let key = "currentQuiz";
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  getTime() {
    let key = "testStartTime";
    let data = localStorage.getItem(key);
    return data ? Number(data) : null;
  }

  setTimer(timeLimit = 0) {
      this.endTime = new Date().getTime() + (timeLimit * 60 * 1000);
  }

  timeIntervalManager= () => {
    var now = new Date().getTime(); 
    var distance = (this.endTime)- now;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);  
    if (distance < 1000) {
     this.reviewAndEndTest();
     if(this.timeInterval){
      clearInterval(this.timeInterval);
     }
    }
    this.timer  =  hours + "h "
    + minutes + "m " + seconds + "s ";
  }

  startTest() {
    this.testStarted = !this.testStarted;
    if(this.quiz){
      this.setTimer(this.quiz.timeLimit);
      this.saveStartTestTime();
      this.timeInterval = setInterval(this.timeIntervalManager, 1000);
      this.autoSaveTimeInterval =  setInterval(this.autoSave, 2000);
    }
  }

  saveStartTestTime() {
      let key = "testStartTime";
      let data = JSON.stringify((new Date()).getTime());
      localStorage.setItem(key,data);
  }

  autoSave = () => {
    console.log("iski");
    console.log(this.quiz);
    if(this.quiz){
     let key = "currentQuiz";
     let data = JSON.stringify(this.quiz);
     localStorage.setItem(key,data);
    }
  }


  
  nextQuestion() {
    if(this.quiz){
      this.questionIndex++;
      this.currentQuestion = this.quiz.questions[this.questionIndex];
    }
  }

  previousQuestion() {
    if(this.quiz){
      this.questionIndex--;
      this.currentQuestion = this.quiz.questions[this.questionIndex];
    }
  }
  
  reviewAndEndTest() {
    if(this.quiz){
      this.showReview =!this.showReview;
      this.testStarted = !this.testStarted;
      clearInterval(this.timeInterval);
    }
  }
  
  endTest() {
    if(this.quiz){
      // let key = this.quiz.id + "$$" + new Date();
      // let data = JSON.stringify(this.quiz);
      // localStorage.setItem(key,data);
     // showResult()
      //this.showReview =!this.showReview;
    }
  }
}



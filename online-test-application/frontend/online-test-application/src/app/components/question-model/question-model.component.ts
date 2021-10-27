import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/domain/Question';

@Component({
  selector: 'app-question-model',
  templateUrl: './question-model.component.html',
  styleUrls: ['./question-model.component.css']

})
export class QuestionModelComponent implements OnInit {
  showReview = false;

  constructor() { }

  @Input('index') index: number = 0;

  @Input('question') question: Question | undefined;
  @Input('showNextQuestion') showNextQuestion: boolean = true;
  @Input('showPreviousQuestion') showPreviousQuestion: boolean = true;
  @Output('nextQuestion') nextQuestion = new EventEmitter<Number>();
  @Output('previousQuestion') previousQuestion = new EventEmitter<Number>();
  @Output('endTest') endTestEmitter = new EventEmitter<Boolean>();



  ngOnInit(){

  }

  sendToParent(){
    if(this.index){
      this.index = this.index -1 ;
    }
    this.nextQuestion.emit(this.index);
  }


  proceedToNextQuestion(){
    if(this.index){
      this.index = this.index +1 ;
    }
    this.nextQuestion.emit(this.index);
  }

  proceedToPreviousQuestion(){
    if(this.index){
      this.index = this.index - 1 ;
    }
    this.previousQuestion.emit(this.index);
  }

  endTest(){
    this.endTestEmitter.emit(true);
  }


}

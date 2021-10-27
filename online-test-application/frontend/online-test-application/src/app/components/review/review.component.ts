import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Answers } from 'src/app/domain/Answers';
import { Quiz } from 'src/app/domain/Quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit, AfterViewInit {
  showEvaluation = false;
  constructor(
    private quizService : QuizService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.quiz) {
      this.dataSource = new MatTableDataSource<any>(this.quiz.questions);
    }
  }
  dataSource: MatTableDataSource<any> | undefined;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    if (this.quiz) {
      this.dataSource = new MatTableDataSource<any>(this.quiz.questions);
    }
    if (this.paginator && this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  @Input('quiz') quiz: Quiz | undefined;

  @Output('endTest') endTestEmitter = new EventEmitter<Boolean>();

  displayedColumns: string[] = ['Sno', 'Question', 'Options', 'SelectedAnswer'];

  endTest() {
    this.showResult();
    this.endTestEmitter.emit(true);
  }

  goToHomePage() {
    console.log('iski')
    this.router.navigate(['/']);
  }
  

  showResult() {
      this.quizService.getQuizAnswers().subscribe((answers: Array<Answers>)=>{
        console.log(answers);
        this.prepareAndValidateAnswers(answers);
        // this.quiz = data;
        // this.correctAnswer = data.Answers[0];
      });
    }
    prepareAndValidateAnswers(answers: Array<Answers>) {
      if(!this.quiz){
        return;
      }
      let  questionsMap =  new Map(this.quiz.questions.map(i => [i.id, i]));
      answers.forEach(element => {
        let question = questionsMap.get(element.id);
        if(question){
          element.question = question.question;
          element.options  = question.options;
          element.marks    = question.marks;
          element.answer   = question.answer;
        }
        this.dataSource = new MatTableDataSource<any>(answers);
        if(this.dataSource && this.paginator){
          this.paginator.firstPage();
          this.dataSource.paginator = this.paginator;
        }
        this.displayedColumns= ['Sno', 'Question', 'Options', 'SelectedAnswer','CorrectAnswer','Explaination'];       
        this.validateAnswers(answers);

      });  
    }

  totalMarks = 0;
  totalCorrect = 0;
  totalWrong = 0;
  validateAnswers(answers: Answers[]) {
    this.totalMarks = 0;
    this.totalCorrect = 0;
    this.totalWrong = 0;
    for(let i=0; i<answers.length; i++){
      if(answers[i].correctAnswer == answers[i].answer){
        this.totalMarks = this.totalMarks + answers[i].marks;
        this.totalCorrect++;
      } else{
        this.totalWrong++;
      }
    }
    this.showEvaluation = !this.showEvaluation;
  }
}



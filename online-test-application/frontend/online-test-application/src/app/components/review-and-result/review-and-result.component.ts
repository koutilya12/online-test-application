import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/domain/Quiz';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-review-and-result',
  templateUrl: './review-and-result.component.html',
  styleUrls: ['./review-and-result.component.css']
})
export class ReviewAndResultComponent implements OnInit {

  constructor() { }

  totalTests =0;
  

  tests: Array<Quiz> = [];

  ngOnInit(): void {
    this.getQuizFromLocal();
  }

  getQuizFromLocal() {
    this.totalTests = localStorage.length;
    if(this.totalTests > 0){
      for(let i =0; i< this.totalTests;i++){
        let key = localStorage.key(i);
        if(!key){
          continue;
        }
        let data = localStorage.getItem(key);
        if(!data){
          continue;
        }
        let quiz = JSON.parse(data);
        this.tests.push(quiz);
      }
    }
   }


}


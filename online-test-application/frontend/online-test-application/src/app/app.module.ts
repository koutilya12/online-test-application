import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';




import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ReviewAndResultComponent } from './components/review-and-result/review-and-result.component';
import { QuestionModelComponent } from './components/question-model/question-model.component';
import { ReviewComponent } from './components/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ReviewAndResultComponent,
    QuestionModelComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

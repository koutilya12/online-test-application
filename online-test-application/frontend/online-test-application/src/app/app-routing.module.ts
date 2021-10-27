import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { ReviewAndResultComponent } from './components/review-and-result/review-and-result.component';

const routes: Routes = [
  {path: 'quiz', component: QuizComponent},
  {path: 'review-and-result', component: ReviewAndResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [QuizComponent, ReviewAndResultComponent]

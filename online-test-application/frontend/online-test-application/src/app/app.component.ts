import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-test-application';

  firstNumber = '0';
  secondNumber = '0';
  result = 0;
  addNumber() {
    this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
  }

}

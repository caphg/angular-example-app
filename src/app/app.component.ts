import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  public newTodo = {};
  public todos = [];

  constructor() {
  }

  addTodo() {
  }

  toggleTodoComplete(todo) {
  }


}
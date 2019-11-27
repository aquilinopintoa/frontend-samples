import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public projects = [
    {
      url: 'https://apinto-vue-card-manager.firebaseapp.com',
      label: 'Card Manager using Vue'
    },
    {
      url: 'https://apinto-react-card-manager.firebaseapp.com',
      label: 'Card Manager using React'
    },
    {
      url: 'https://apinto-angular-expense-control.firebaseapp.com',
      label: 'Expense Control using Angular v8'
    }
  ]
}

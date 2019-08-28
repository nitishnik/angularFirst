import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngHome01';
  say = 'hello!';
  onClick() {
    alert('I alive!');
  }
}

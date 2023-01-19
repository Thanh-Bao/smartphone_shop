import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';
  username: FormControl = new FormControl('', Validators.required);
  ngOninit() {
    console.log(this.username.errors);
    console.log(this.username.hasError);
    console.log(this.username.hasError('username'));
  }
  clickBtn() {
    this.title = 'asdasd'
  }
}

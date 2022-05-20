import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobItUp';
  isJobSeeker!: String;

  ngOnInit(): void {
    this.isJobSeeker='N';
  }
}

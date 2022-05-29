import { Component } from '@angular/core';
import { JobSeekerClass } from './jobseeker-class';
import { JobPosterClass } from './jobposter-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobItUp';
  isJobSeeker!: String;
  jobSeeker!: JobSeekerClass;
  jobPoster!: JobPosterClass;
  jobSeekerId: string="";
  jobPosterId: string="";

  ngOnInit(): void {
    this.isJobSeeker='N';
  }

  jobSeekerLink(id: string): string {
    this.jobSeekerId = id;
    console.log(this.jobSeekerId);
    return "/jobSeekerProfile/" + (id);
  }

  jobPosterLink(id: string): string {
    this.jobPosterId = id;
    console.log(this.jobPosterId);
    return "/jobPosterProfile/" + (id);    
  }
}

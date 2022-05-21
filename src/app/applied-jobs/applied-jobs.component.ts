import { Component, OnInit } from '@angular/core';
import { JobClass } from '../job-class';
import { JobItUpApisService } from '../job-it-up-apis.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css'],
})
export class AppliedJobsComponent implements OnInit {
  isJobSeeker!: String;
  public results: Array<JobClass> = [];

  constructor(private apiService: JobItUpApisService) {}

  ngOnInit(): void {
    this.isJobSeeker = 'Y';
    this.apiService.getJobs().subscribe((result: JobClass[]) => {
      this.results = result;
    });
  }

  deleteBtn() {
    if (confirm('Are you sure to delete Application?'))
      console.log('delete pressed....');
    // call delete api here.
  }
}

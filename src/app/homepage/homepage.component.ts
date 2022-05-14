import { Component, OnInit } from '@angular/core';
import { JobClass } from '../job-class';
import { JobPosterClass } from '../jobposter-class';
import { JobItUpApisService } from '../job-it-up-apis.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  results: Array<JobClass> = [];
  jobId: number = 0;
  selectedJob!: JobClass;
  selectedJobPoster!: JobPosterClass;
  constructor(private apiService: JobItUpApisService) {

  }

  ngOnInit(): void {
    this.apiService.getJobs().subscribe((result: JobClass[]) => {
      this.results = result;
      this.selectedJob = result[0];
      console.log("job results:" + this.results);
      //setting the first job poster
      this.apiService.getSpecificJobPoster(this.selectedJob.jobPosterId).subscribe((poster: JobPosterClass) => {
        this.selectedJobPoster = poster;
        console.log('poster' + JSON.stringify(poster));

      });
    }
    );


  }

  link(index: number): string {
    this.jobId = index;
    console.log(this.jobId);
    return "/applyjob/" + (index);
  }
  listClick(newValue: JobClass) {

    //setting the selected job to model
    this.selectedJob = newValue;

    this.apiService.getSpecificJobPoster(this.selectedJob.jobPosterId).subscribe((poster: JobPosterClass) => {

      this.selectedJobPoster = poster;

      console.log('poster' + JSON.stringify(poster));

    });
  }

  //split the description string using new line to preserve format
  getDescription(desc: string): string[] {
    return desc.split("\n");
  }
}
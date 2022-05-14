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
  companyLogo: Array<String>= [];
  companyName: Array<String>= [];
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

      //setting company logo at each index
      result.forEach((element, index) => {
        this.apiService.getSpecificJobPoster(element.jobPosterId).subscribe((poster: JobPosterClass) => 
          { 
            this.companyLogo[index] = poster.companyLogo
            this.companyName[index] = poster.companyName
            console.log('company logo path at index ' + [index] + ' is ' + (this.companyLogo[index]));
            console.log('company name path at index ' + [index] + ' is ' + (this.companyName[index]));
            
          });
        });
       

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
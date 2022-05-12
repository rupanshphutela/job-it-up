import { Component, OnInit } from '@angular/core';
import { JobClass } from '../job-class';
import { JobItUpApisService } from '../job-it-up-apis.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  results: Array<JobClass> = [];
  jobId: number = 0;

  constructor(private apiService: JobItUpApisService) {
  
   }

  ngOnInit(): void {
    this.apiService.getJobs().subscribe( (result: JobClass[]) =>
      {
        this.results = result;
        console.log("job results:" + JSON.stringify(result));
      }
    );

  
    this.apiService.getSpecificJob(this.jobId).subscribe((result: JobClass) => 
    {
      this.jobId = 1;
      console.log('jobId: ' + this.jobId);
      console.log('detail result' + JSON.stringify(result));
    });
  }

  link(index:number): void {
    this.jobId=index;
  }

}

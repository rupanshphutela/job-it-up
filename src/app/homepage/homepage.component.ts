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
    this.apiService.getJobs().subscribe( (result: JobClass[]) =>
      {
        this.results = result;
        this.selectedJob=this.results[0];
        console.log("job results:" + JSON.stringify(result));
      }
    );
    
    // this.apiService.getSpecificJob(this.jobId).subscribe((result: JobClass) => 
    // {
  
    //   this.selectedJob=result;
      
    //   console.log('detail result' + JSON.stringify(result));
    //   console.log('name'+this.selectedJob.title);
      
    // });
  
  }

  link(index:number): void {
    this.jobId=index;
    console.log(this.jobId);
  }
  listClick(newValue:JobClass) {
    
    //setting the selected job to model
    this.selectedJob = newValue; 
    console.log(newValue);
  
}

//split the description string using new line to preserve format
getDescription(desc : string): string[]{
return desc.split("\n");
}
}

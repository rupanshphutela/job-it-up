import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobItUpApisService } from '../job-it-up-apis.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { JobClass } from '../job-class';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-job-page',
  templateUrl: './post-job-page.component.html',
  styleUrls: ['./post-job-page.component.css']
})
export class PostJobPageComponent implements OnInit {
  jobId: string = "";
  response_id: string="";
  jobPosterId: string="";
  selectedJob!: JobClass;
  checkoutForm = this.fb.group({
    title: '',
    domain: '',
    skills: [],
    experienceNeeded: '',
    location: '',
    salary: '',
    applyDeadline: '',
    startDate: '',
    endDate: '',
    description: '',
    jobPosterId: '',
    hasApplicants: ''
  });
  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private apiService: JobItUpApisService, 
    private http: HttpClient) { }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['jobId'];
    this.jobPosterId = this.route.snapshot.params['jobPosterId'];

    console.log("this is jobid received by post/edit a job component", this.jobId);
    console.log("this is jobPosterId received by post/edit a job component", this.jobPosterId);

    
    if(this.jobId!=null){
      this.apiService.getSpecificJob(this.jobId).subscribe((result: JobClass) => {
        console.log("in");
        console.log('detail result' + JSON.stringify(result));
        this.selectedJob=result;
      });
     }
  }

  submitForm(Values: any) {
    console.log("job id passed to form group is ", this.jobId)

    this.checkoutForm.patchValue({
      jobId: this.jobId,
      jobPosterId: this.jobPosterId,
      hasApplicants: "N",
    });

    console.log("values.....", this.checkoutForm.value)
    if(this.selectedJob==null){
    this.apiService.createJobPost(this.checkoutForm.value).subscribe((response) =>{
      this.response_id = response.id;
      console.log(response);
      });
    }
    else{
      this.apiService.updateJobPost(this.checkoutForm.value,this.selectedJob.jobId).subscribe((response) =>{
        this.response_id = response.jobId;
        
        console.log(response);
      });
    }
  }

  alljobs(): string {
    return "/homepage/" + (this.jobPosterId) + '/N';
  }
}

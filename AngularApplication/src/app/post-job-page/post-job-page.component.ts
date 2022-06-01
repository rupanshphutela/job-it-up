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
    this.jobId = this.route.snapshot.params['id'];
    console.log("this is id. in post a job cmpt 16:", this.jobId);
    
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
      jobPosterId: "1",
      hasApplicants: "N",
    });

    console.log("values.....", this.checkoutForm.value)
    if(this.selectedJob==null){
    this.apiService.createJobPost(this.checkoutForm.value).subscribe((response) =>{
      this.response_id = response.id;
      console.log(response);
    });
  }else{
    this.apiService.updateJobPost(this.checkoutForm.value,this.selectedJob.jobId).subscribe((response) =>{
      this.response_id = response.id;
      
      console.log(response);
    });
  }

 
  }

 


}
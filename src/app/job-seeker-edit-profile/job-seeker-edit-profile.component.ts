import { Component, OnInit } from '@angular/core';
import { JobSeekerClass } from '../jobseeker-class';
import { HttpClient } from '@angular/common/http';
import { JobItUpApisService } from '../job-it-up-apis.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-seeker-edit-profile',
  templateUrl: './job-seeker-edit-profile.component.html',
  styleUrls: ['./job-seeker-edit-profile.component.css']
})
export class JobSeekerEditProfileComponent implements OnInit {
  jobSeekerResults!: JobSeekerClass;
  isJobSeeker: string="Y";
  jobSeekerId: string="";
  response_id: string="";

  checkoutForm = this.fb.group({
    primarySkills: [],
    otherSkills: [],
    bio: '',
    resume: '',
    picture: '',
    location: '',
    fname: '',
    lname: '',
    contactNo: '',
    email: '',
    workExperience: [this.fb.array([
      this.fb.group({
      companyName: '',
      role: '',
      fromDate: '',
      toDate: ''
      })
    ])
  ],
    education: [this.fb.array([
      this.fb.group({
      universityName: '',
      degree: '',
      fromDate: '',
      toDate: ''
      })
    ])
    ]
  }); 

  constructor(
    private route: ActivatedRoute, 
    private apiService: JobItUpApisService, 
    private http: HttpClient,
    private fb: FormBuilder) {} 

  ngOnInit(): void {
    this.jobSeekerId = this.route.snapshot.params['id'];
    console.log("Job Seeker ID passed from Job Seeker Profile Page is: ", this.jobSeekerId);
    
    this.apiService.getJobSeekerProfile(this.jobSeekerId).subscribe((jobSeeker: JobSeekerClass) => 
    {
      this.jobSeekerResults = jobSeeker;
      console.log('API Service Result for this Job Seeker is: ' + JSON.stringify(jobSeeker));
    });
  }

  submitForm(Values: any) {
    console.log("job id passed to form group is ", this.jobSeekerId)

    this.checkoutForm.patchValue({
      jobSeekerId: this.jobSeekerId,
    });

    console.log("values.....", this.checkoutForm.value)
    

    this.apiService.editJobSeekerProfile(this.checkoutForm.value).subscribe((jobSeeker: JobSeekerClass) => 
    {
      this.response_id = jobSeeker.jobSeekerId;
      console.log('API Service Result for this Job Seeker is: ' + JSON.stringify(jobSeeker));
    });

  }

  jobSeekerLink(id: string): string {
    this.jobSeekerId = id;
    console.log(this.jobSeekerId);
    return "/jobSeekerProfile/" + (id);
  }

}

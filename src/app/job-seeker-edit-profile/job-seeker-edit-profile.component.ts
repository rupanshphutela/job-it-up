import { Component, OnInit } from '@angular/core';
import { JobSeekerClass } from '../jobseeker-class';
import { HttpClient } from '@angular/common/http';
import { JobItUpApisService } from '../job-it-up-apis.service';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-seeker-edit-profile',
  templateUrl: './job-seeker-edit-profile.component.html',
  styleUrls: ['./job-seeker-edit-profile.component.css']
})
export class JobSeekerEditProfileComponent implements OnInit {
  jobSeekerResults!: JobSeekerClass;
  isJobSeeker: string="Y";
  jobSeekerId: string="";
  fname: string="";
  lname: string="";
  bio: string="";
  resume: string="";
  contactNo: string="";
  email: string="";
  location: string="";
  primarySkills: Array<String>=[];
  otherSkills:Array<String>=[];
  workExperience!: JobSeekerClass["workExperience"];
  education!: JobSeekerClass["education"];
  response_id: string="";

  checkoutForm = this.fb.group({
  primarySkills: ['', Validators.required],
  otherSkills: ['', Validators.required],
  bio: '',
  resume: '',
  picture: '',
  location: '',
  fname: '',
  lname: '',
  contactNo: '',
  email: '',
  workExperience: this.fb.array([this.WorkExperience()]),
  education: this.fb.array([this.Education()])
  }); 

  constructor(
    private route: ActivatedRoute, 
    private apiService: JobItUpApisService, 
    private http: HttpClient,
    private fb: FormBuilder) {}
      
  WorkExperience(): FormGroup {
    return this.fb.group({
      companyName: new FormControl("companyName", Validators.required),
      role: new FormControl("role", Validators.required),
      fromDate: new FormControl("fromDate", Validators.required),
      toDate: new FormControl("toDate", Validators.required)
    })
  }

  Education(): FormGroup {
    return this.fb.group({
      universityName: new FormControl("universityName", Validators.required),
      degree: new FormControl("degree", Validators.required),
      fromDate: new FormControl("fromDate", Validators.required),
      toDate: new FormControl("toDate", Validators.required)
    })
  }

  ngOnInit(): void {
    this.jobSeekerId = this.route.snapshot.params['id'];
    console.log("Job Seeker ID passed from Job Seeker Profile Page is: ", this.jobSeekerId);
    
    this.apiService.getJobSeekerProfile(this.jobSeekerId).subscribe((jobSeeker: JobSeekerClass) => 
    {
      this.jobSeekerResults = jobSeeker;
      this.fname = jobSeeker.fname;
      this.lname = jobSeeker.lname;
      this.bio = jobSeeker.bio;
      this.resume = jobSeeker.resume;
      this.contactNo = jobSeeker.contactNo;
      this.email = jobSeeker.email;
      this.location = jobSeeker.location;
      this.primarySkills = jobSeeker.primarySkills;
      this.otherSkills = jobSeeker.otherSkills;
      this.workExperience = jobSeeker.workExperience;
      this.education = jobSeeker.education;
      console.log('API Service Result for this Job Seeker is: ' + JSON.stringify(jobSeeker));
    });
  }

  submitForm(Values: any) {
    console.log("job id passed to form group is ", this.jobSeekerId)

    this.checkoutForm.patchValue({
      jobSeekerId: this.jobSeekerId,
    });

    console.log("values.....", this.checkoutForm.value)
    

    this.apiService.editJobSeekerProfile(this.jobSeekerId, this.checkoutForm.value).subscribe((jobSeeker: JobSeekerClass) => 
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

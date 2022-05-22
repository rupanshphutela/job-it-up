import { Component, OnInit } from '@angular/core';
import { JobSeekerClass } from '../jobseeker-class';
import { HttpClient } from '@angular/common/http';
import { JobItUpApisService } from '../job-it-up-apis.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-seeker-profile',
  templateUrl: './job-seeker-profile.component.html',
  styleUrls: ['./job-seeker-profile.component.css']
})
export class JobSeekerProfileComponent implements OnInit {
  jobSeekerResults!: JobSeekerClass;
  jobSeekerId: string="";
  isJobSeeker: string="Y";
  jobSeekerWorkExperience!: JobSeekerClass["workExperience"];
  jobSeekerEducation!: JobSeekerClass["education"];
   

  constructor(
    private route: ActivatedRoute, 
    private apiService: JobItUpApisService, 
    private http: HttpClient) {}

  ngOnInit(): void {
    this.jobSeekerId = this.route.snapshot.params['id'];
    console.log("Job Seeker ID passed from Home Page is: ", this.jobSeekerId);
    this.apiService.getJobSeekerProfile(this.jobSeekerId).subscribe((jobSeeker: JobSeekerClass) => 
    {
      this.jobSeekerResults = jobSeeker;
      this.jobSeekerWorkExperience = jobSeeker.workExperience;
      this.jobSeekerEducation = jobSeeker.education;

      console.log('API Service Result for this Job Seeker is: ' + JSON.stringify(jobSeeker));
    });
  }

  jobSeekerEditLink(id: string): string {
    this.jobSeekerId = id;
    console.log(this.jobSeekerId);
    return "/jobSeekerEditProfile/" + (id);
    }

}

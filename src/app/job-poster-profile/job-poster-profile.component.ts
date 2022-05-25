import { Component, OnInit } from '@angular/core';
import { JobPosterClass } from '../jobposter-class';
import { HttpClient } from '@angular/common/http';
import { JobItUpApisService } from '../job-it-up-apis.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-poster-profile',
  templateUrl: './job-poster-profile.component.html',
  styleUrls: ['./job-poster-profile.component.css']
})
export class JobPosterProfileComponent implements OnInit {
  jobPosterResults!: JobPosterClass;
  jobPosterId: string="";
  isJobPoster: string="Y";

  constructor(
    private route: ActivatedRoute, 
    private apiService: JobItUpApisService, 
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.jobPosterId = this.route.snapshot.params['id'];
    console.log("Job Poster ID passed from Landing Page is: ", this.jobPosterId);
    this.apiService.getJobPosterProfile(this.jobPosterId).subscribe((jobSeeker: JobPosterClass) => 
    {
      this.jobPosterResults = jobSeeker;
      console.log('API Service Result for this Job Seeker is: ' + JSON.stringify(jobSeeker));
    });
  }

  jobPosterEditLink(id: string): string {
    this.jobPosterId = id;
    console.log(this.jobPosterId);
    return "/jobPosterEditProfile/" + (id);
    }

}

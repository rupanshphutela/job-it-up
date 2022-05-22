import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { JobClass } from './job-class';
import { JobSeekerClass } from './jobseeker-class';

@Injectable({
  providedIn: 'root'
})
export class JobItUpApisService {

  hostUrl:string = 'http://localhost:8080/';
  jobPostedId:string='1';
  constructor(private http: HttpClient) { }

  getJobs(isJobSeeker:string){
    if(isJobSeeker=='Y'){
      return this.http.get<JobClass[]>(this.hostUrl + 'app/job');
    }
    
    return this.http.get<JobClass[]>(this.hostUrl + 'app/job/jobPoster/'+this.jobPostedId);
  }

  getSpecificJob(id:string){
    return this.http.get<any>(this.hostUrl + 'app/job/' + id );
  }

  getSpecificJobPoster(id:string){
    return this.http.get<any>(this.hostUrl + 'app/jobposter/' + id );
  }

  createJobApplication (checkoutForm: FormData){
    return this.http.post<any>(this.hostUrl + 'app/jobApplication/',checkoutForm);

  }
  createJobPost (checkoutForm: FormData){
    return this.http.post<any>(this.hostUrl + 'app/job/',checkoutForm);
  }

  getJobSeekerProfile (id: string){
    return this.http.get<JobSeekerClass>(this.hostUrl + 'app/jobseeker/' + id );
  }

  
  editJobSeekerProfile (checkoutForm: FormData){
    return this.http.put<JobSeekerClass>(this.hostUrl + 'app/jobseeker/',checkoutForm);
  }

  updateJobPost (checkoutForm: FormData,id:string){
    console.log(checkoutForm);
    return this.http.put<any>(this.hostUrl + 'app/job/'+id,checkoutForm);}
  getJobSeekerAppliedJobs (id: string){
    return this.http.get<any>(this.hostUrl + 'app/jobApplication/jobSeeker/' + id );
  }

  deleteJobApplication (id: string){
    return this.http.delete<number>(this.hostUrl + "app/jobApplication/" +id);
  }
  
}

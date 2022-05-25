import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { JobClass } from './job-class';
import { JobSeekerClass } from './jobseeker-class';
import { JobPosterClass } from './jobposter-class';
import { Form, FormGroup } from '@angular/forms';

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

  getJobPosterProfile (id: string){
    return this.http.get<JobPosterClass>(this.hostUrl + 'app/jobPoster/' + id );
  }
  

  searchJobs(isJobSeeker:string,checkoutForm: FormGroup){
    let params = new HttpParams();
    if(checkoutForm.get('title')?.value !=''){
      params=params.append('title',checkoutForm.get('title')?.value);
    }
    if(checkoutForm.get('domain')?.value !='' && checkoutForm.get('domain')?.value!= 'Select Domain'){
      params=params.append('domain',checkoutForm.get('domain')?.value);
    }
    if(checkoutForm.get('location')?.value !=''){
      params=params.append('location',checkoutForm.get('location')?.value);
    }
    if(checkoutForm.get('startDate')?.value !=''){
      params=params.append('startDate',checkoutForm.get('startDate')?.value);
    }
    if(checkoutForm.get('endDate')?.value !=''){
      params=params.append('endDate',checkoutForm.get('endDate')?.value);
    }
    if(isJobSeeker=='Y'){
    return this.http.get<JobClass[]>(this.hostUrl + "app/jobs" , {params: params});
    }else{
      return this.http.get<JobClass[]>(this.hostUrl + "app/jobposter/"+ this.jobPostedId+"/jobs", {params: params});
    }
  }
}

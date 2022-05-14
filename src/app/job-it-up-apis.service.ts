import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { JobClass } from './job-class';

@Injectable({
  providedIn: 'root'
})
export class JobItUpApisService {

  hostUrl:string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getJobs(){
    return this.http.get<JobClass[]>(this.hostUrl + 'app/job');
  }

  getSpecificJob(id:number){
    return this.http.get<any>(this.hostUrl + 'app/job/' + id );
  }

  getSpecificJobPoster(id:string){
    return this.http.get<any>(this.hostUrl + 'app/jobposter/' + id );
  }
}

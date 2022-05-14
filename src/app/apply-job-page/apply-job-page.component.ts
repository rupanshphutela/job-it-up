import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobItUpApisService } from '../job-it-up-apis.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-apply-job-page',
  templateUrl: './apply-job-page.component.html',
  styleUrls: ['./apply-job-page.component.css']
})
export class ApplyJobPageComponent implements OnInit {
  jobId: number = 0;
  form: FormGroup;
  constructor(public fb: FormBuilder, private route: ActivatedRoute, private apiService: JobItUpApisService, private http: HttpClient) {
    this.form = this.fb.group({
      fname: '',
      lname: '',
      email: '',
      phone: '',
      auth: '',
      ExpSalary: '',
      resume: '',
      jobSeekerId: ''
    });
  }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['id'];
    console.log("this is id. in apply job cmpt 16:", this.jobId);
    this.apiService.getSpecificJob(this.jobId).subscribe((result: any) => {
      console.log('detail result' + JSON.stringify(result));
    });
  }

  submitForm(Values: any) {
    // need to fix this code.
    var formData: any = new FormData();
    formData.append('fname', this.form.get('fname')?.value);
    formData.append('lname', this.form.get('lname')?.value);
    formData.append('email', this.form.get('email')?.value);
    formData.append('phone', this.form.get('phone')?.value);
    formData.append('workAuthorization', this.form.get('auth')?.value);
    formData.append('expectedSalary', this.form.get('ExpSalary')?.value);
    formData.append('resume', this.form.get('resume')?.value);
    formData.append('jobSeekerId', "1");
    
    console.log("this.form.get('fname')?.value",this.form.get('lname')?.value)
    console.log("this.form.get('fname')?.value",this.form.get('email')?.value)
    console.log("this.form.get('fname')?.value",this.form.get('resume')?.value)
    console.log("values.....", Values)
    // getting empty obj in formData
    console.log("values.....", formData)

    // console.log("values", typeof Values)

    this.http.post<any>('http://localhost:8080/app/jobapplication/', (formData)).subscribe({
      next: (response: any) => console.log(response),
      error: (error: any) => console.log(error),
    });
  }

}

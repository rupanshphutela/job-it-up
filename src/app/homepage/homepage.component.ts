import { Component, OnInit } from '@angular/core';
import { JobClass } from '../job-class';
import { JobPosterClass } from '../jobposter-class';
import { JobItUpApisService } from '../job-it-up-apis.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  results: Array<JobClass> = [];
  companyLogo: Array<String>= [];
  companyName: Array<String>= [];
  jobId!: string ;
  selectedJob!: JobClass;
  selectedCompanyLogo!: String;
  selectedCompanyName!: String;
  isJobSeeker!: string;

  checkoutForm = this.fb.group({
    title: '',
    domain: 'Select Domain',
    location: '',
    startDate: '',
    endDate: ''
  });
  constructor(private fb: FormBuilder,private apiService: JobItUpApisService) {

  }

  ngOnInit(): void {
    this.isJobSeeker='Y';
    this.apiService.getJobs(this.isJobSeeker).subscribe((result: JobClass[]) => {
      console.log("The response for all jobs is",result);
      this.results = result;
      this.selectedJob = result[0];
      console.log("job results:" + this.results);

      //setting company logo at each index
      result.forEach((element, index) => {
     
        this.apiService.getSpecificJobPoster(element.jobPosterId).subscribe((poster: JobPosterClass) => 
          { 
            this.companyLogo[index] = poster.companyLogo
            this.companyName[index] = poster.companyName
            console.log('company logo path at index ' + [index] + ' is ' + (this.companyLogo[index]));
            console.log('company name path at index ' + [index] + ' is ' + (this.companyName[index]));
            //to display the first job details when page is loaded
            if(index==0){
            this.selectedCompanyLogo=this.companyLogo[index];
            this.selectedCompanyName=this.companyName[index];
            }
          });
        });
        
      
    }
    );


  }

  link(index: string): string {
    this.jobId = index;
    console.log(this.jobId);
    return "/applyjob/" + (index);
  }
  editJobLink(index: string): string {
    this.jobId = index;
    console.log(this.jobId);
    return "/editjob/" + (index);
  }
  listClick(newValue: JobClass,index: number) {

    //setting the selected job to model
    this.selectedJob = newValue;
    this.selectedCompanyLogo=this.companyLogo[index];
    this.selectedCompanyName=this.companyName[index];
  }

  //split the description string using new line to preserve format
  getDescription(desc: string): string[] {
    return desc.split("\n");
  }

  search(){
    console.log("Values from HTML are.....", this.checkoutForm.value)
    this.apiService.searchJobs(this.isJobSeeker,this.checkoutForm).subscribe((result: JobClass[]) => {   
      this.results = result;
      this.selectedJob = result[0];
      console.log("job results:" + this.results);
if(result!=null){
      //setting company logo at each index
      result.forEach((element, index) => {
     
        this.apiService.getSpecificJobPoster(element.jobPosterId).subscribe((poster: JobPosterClass) => 
          { 
            this.companyLogo[index] = poster.companyLogo
            this.companyName[index] = poster.companyName
            console.log('company logo path at index ' + [index] + ' is ' + (this.companyLogo[index]));
            console.log('company name path at index ' + [index] + ' is ' + (this.companyName[index]));
            //to display the first job details when page is loaded
            if(index==0){
            this.selectedCompanyLogo=this.companyLogo[index];
            this.selectedCompanyName=this.companyName[index];
            }
          });
        }); 
      }  
    });
  }
}
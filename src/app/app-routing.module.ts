import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { ApplyJobPageComponent } from './apply-job-page/apply-job-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostJobPageComponent } from './post-job-page/post-job-page.component';
import { JobSeekerProfileComponent } from './job-seeker-profile/job-seeker-profile.component';
import { JobSeekerEditProfileComponent } from './job-seeker-edit-profile/job-seeker-edit-profile.component';
import { JobPosterProfileComponent } from './job-poster-profile/job-poster-profile.component';


const routes: Routes = [  
  { path: '', component: HomepageComponent },
  { path: 'applyjob/:id', component: ApplyJobPageComponent },
  { path: 'postJob', component: PostJobPageComponent },
  { path: 'appliedJobs', component: AppliedJobsComponent },
  { path: 'jobSeekerProfile/:id', component: JobSeekerProfileComponent},
  { path: 'editjob/:id', component: PostJobPageComponent },
  { path: 'jobSeekerEditProfile/:id', component: JobSeekerEditProfileComponent},
  { path: 'jobPosterProfile/:id', component: JobPosterProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

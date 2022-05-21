import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { ApplyJobPageComponent } from './apply-job-page/apply-job-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostJobPageComponent } from './post-job-page/post-job-page.component';

const routes: Routes = [  
  { path: '', component: HomepageComponent },
  { path: 'applyjob/:id', component: ApplyJobPageComponent },
  { path: 'postJob', component: PostJobPageComponent },
  { path: 'appliedJob', component: AppliedJobsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

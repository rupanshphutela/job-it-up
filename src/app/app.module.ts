import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { ApplyJobPageComponent } from './apply-job-page/apply-job-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostJobPageComponent } from './post-job-page/post-job-page.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { JobSeekerProfileComponent } from './job-seeker-profile/job-seeker-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ApplyJobPageComponent,
    PostJobPageComponent,
    AppliedJobsComponent,
    JobSeekerProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,    //added here too
    ReactiveFormsModule //added here too
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { JobPost } from './models/job-post.model';
import { JobListComponent } from './job-list/job-list.component';
import { JobCreateComponent } from "./job-create/job-create.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, JobListComponent, JobCreateComponent, JobCreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }

  jobPosts: JobPost[] = [];

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/jobPosts')
      .subscribe({
        next: (response) => this.jobPosts = response as JobPost[],
        error: (err) => console.error('HTTP error:', err)
      });
  }

  handleJobCreation = (newJobPost: JobPost): void => {
    newJobPost.id = this.jobPosts.length + 1;
    this.jobPosts.push(newJobPost);
    this.httpClient.post('http://localhost:8080/createJobPost',
      newJobPost,
    ).subscribe({
      next: (response) => console.log('Job post created successfully:', response),
      error: (err) => console.error('Error creating job post:', err)
    });
  }
}



import { Injectable } from '@angular/core';
import { JobPost } from '../models/job-post.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobHandlerService {

  jobPosts: JobPost[] = [];

  constructor(private httpClient: HttpClient) { }


  createNewJob = (jobPost: JobPost): void => {
    jobPost.id = this.jobPosts.length + 1;
    this.jobPosts.push(jobPost);
    this.httpClient.post('http://localhost:8080/createJobPost',
      jobPost,
    ).subscribe({
      next: (response) => console.log('Job post created successfully:', response),
      error: (err) => console.error('Error creating job post:', err)
    });
  }
  getAllJobs = async (): Promise<JobPost[]> => {
    try {
      const response = await firstValueFrom(this.httpClient.get<JobPost[]>('http://localhost:8080/jobPosts'));
      this.jobPosts = response as JobPost[];
      return this.jobPosts;
    } catch (err) {
      return this.jobPosts;
    }
  }

  deleteJob = (jobPost: JobPost): void => {
    this.httpClient.delete(`http://localhost:8080/jobPost/`, {
      body: jobPost
    })
      .subscribe({
        next: (response) => console.log('Job post deleted successfully:', response),
        error: (err) => console.error('Error deleting job post:', err)
      });
  }
}

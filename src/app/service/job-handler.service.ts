import { Injectable } from '@angular/core';
import { JobPost } from '../models/job-post.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobHandlerService {
  private readonly API_URL = 'http://localhost:8080/jobPost';

  constructor(private httpClient: HttpClient) { }

  createNewJob = (jobPost: JobPost): void => {
    this.httpClient.post(this.API_URL, jobPost).subscribe({
      next: (response) => console.log('Job post created successfully:', response),
      error: (err) => console.error('Error creating job post:', err)
    });
  }

  getAllJobs = async (): Promise<JobPost[]> => {
    try {
      const response = await firstValueFrom(this.httpClient.get<JobPost[]>(this.API_URL + 's'));
      return response as JobPost[];
    } catch (err) {
      return [];
    }
  }

  updateJob(jobPost: JobPost): void {
    this.httpClient.put(this.API_URL, jobPost)
      .subscribe({
        next: (response) => console.log('Job post updated successfully:', response),
        error: (err) => console.error('Error updating job post:', err)
      });
  }

  deleteJob = (jobPost: JobPost): void => {
    this.httpClient.delete(this.API_URL, {
      body: jobPost
    }).subscribe({
      next: (response) => console.log('Job post deleted successfully:', response),
      error: (err) => console.error('Error deleting job post:', err)
    });
  }

  searchJobs = async (searchTerm: string): Promise<JobPost[]> => {
    try {
      const response = await firstValueFrom(this.httpClient.get<JobPost[]>(`${this.API_URL}s/${searchTerm}`));
      return response as JobPost[];
    } catch (err) {
      return [];
    }
  }
}

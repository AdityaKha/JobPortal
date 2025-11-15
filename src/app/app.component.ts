import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { JobPost } from './models/job-post.model';
import { JobListComponent } from './job-list/job-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, JobListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }

  jobPosts: JobPost[] = [];

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/jobPosts')
      .subscribe({
        next: (response) => this._populateJobPosts(response as any[]),
        error: (err) => console.error('HTTP error:', err)
      });
  }

  _populateJobPosts(data: any[]): void {
    this.jobPosts = this.mapToJobPosts(data);
  }

  mapToJobPosts(data: any[]): JobPost[] {
    return data.map(item => ({
      id: item.postId,
      title: item.postProfile,
      description: item.postDesc,
      techStack: item.postTechStack.join(", "),
      experience: item.reqExperience
    }));
  }
}



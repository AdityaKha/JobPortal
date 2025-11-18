import { Component, Input } from "@angular/core";
import { JobPost } from '../models/job-post.model';
import { MatCardModule } from '@angular/material/card';
import { JobHandlerService } from "../service/job-handler.service";
import { MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
@Component({
    selector: "app-job-list",
    templateUrl: "./job-list.component.html",
    styleUrls: ["./job-list.component.sass"],
    imports: [MatCardModule, MatButtonModule, FormsModule],
})
export class JobListComponent {

    constructor(private jobHandlerService: JobHandlerService, private router: Router) { }

    jobPosts: JobPost[] = [];

    searchTerm: string = '';


    onSearchChange() {
        if (this.searchTerm.trim() === '') {
            this.jobHandlerService.getAllJobs().then(results => {
                this.jobPosts = results;
            });
            return;
        }
        this.jobHandlerService.searchJobs(this.searchTerm).then(results => {
            this.jobPosts = results;
        });
    }

    async ngOnInit(): Promise<void> {
        this.jobPosts = await this.jobHandlerService.getAllJobs();
    }

    onDelete = (jobPost: JobPost): void => {
        this.jobPosts = this.jobPosts.filter(job => job.id !== jobPost.id);
        this.jobHandlerService.deleteJob(jobPost);
    }

    onEdit = (jobPost: JobPost): void => {
        this.router.navigate(['create-job'], { state: { jobPost } });
    }

}
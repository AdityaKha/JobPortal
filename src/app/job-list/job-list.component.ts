import { Component, Input } from "@angular/core";
import { JobPost } from '../models/job-post.model';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: "app-job-list",
    templateUrl: "./job-list.component.html",
    styleUrls: ["./job-list.component.sass"],
    imports: [MatCardModule],
})
export class JobListComponent {

    @Input() jobPosts: JobPost[] = [];
}
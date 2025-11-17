import { Component, OnInit } from "@angular/core";
import { JobPost } from "../models/job-post.model";
import { MatOption, MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { JobHandlerService } from "../service/job-handler.service";
import { FormsModule } from "@angular/forms";
@Component({
    selector: "job-create",
    templateUrl: "./job-create.component.html",
    styleUrls: ["./job-create.component.sass"],
    imports: [
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatOption,
        MatSelectModule,
    ],
})
export class JobCreateComponent implements OnInit {
    jobPost: JobPost = new JobPost();

    constructor(private jobHandlerService: JobHandlerService) { }

    ngOnInit(): void {
        if (history.state.jobPost) {
            console.log(history.state);
            this.jobPost = history.state.jobPost
        }
    }

    onJobCreate = (): void =>
        this.jobHandlerService.createNewJob(this.jobPost);
}
import { Component, EventEmitter, Output } from "@angular/core";
import { JobPost } from "../models/job-post.model";
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: "job-create",
    templateUrl: "./job-create.component.html",
    styleUrls: ["./job-create.component.sass"],
    imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
})
export class JobCreateComponent {
    jobPost: JobPost = new JobPost();

    onTechStackChange = (event: MatSelectChange): void =>
        this.jobPost.techStack = event.value;

    onExperienceChange = (event: Event): number =>
        this.jobPost.experience = Number((event.target as HTMLInputElement).value);

    onDescriptionChange(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.jobPost.description = inputElement.value;
    }

    onTitleChange(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.jobPost.title = inputElement.value;
    }

    
    @Output() 
    postSubmit: EventEmitter<JobPost> = new EventEmitter<JobPost>();
    
    
    onJobCreate(): void {
        console.log(this.jobPost.toString());
        this.postSubmit.emit(this.jobPost);
    }
}
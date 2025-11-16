import { Component } from "@angular/core";
import { JobPost } from "../models/job-post.model";
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: "job-create",
    templateUrl: "./job-create.component.html",
    styleUrls: ["./job-create.component.sass"],
    imports: [MatFormFieldModule, MatInputModule, MatSelectModule],

})
export class JobCreateComponent {
    jobPost:any;

    onTechStackChange(event: any): void {
        const selectedOptions = event.value;
        this.jobPost.techStack = selectedOptions.join(", ");    
    }

}